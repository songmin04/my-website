import {
  getCart,
  removeFromCart,
  updateCartQuantity,
  getCartTotal,
  clearCart,
  createOrder,
  formatPrice,
  getCategoryName,
  formatItemName,
  escapeHtml,
  $,
  $$
} from '../js/utils.js';

const DELIVERY_MIN_ORDER = 10000;
const DELIVERY_FREE_THRESHOLD = 15000;
const DELIVERY_FEE = 3000;
const COUPON_DISCOUNT_RATE = 0.1;

const basketItemsContainer = $('#basketItems');
const itemsTotal = $('#itemsTotal');
const finalTotal = $('#finalTotal');
const orderSubmitBtn = $('#orderSubmitBtn');
const orderTypeButtons = $('#orderTypeButtons');
const deliveryWarning = $('#deliveryWarning');
const couponCheckbox = $('#couponCheckbox');
const couponDiscountRow = $('#couponDiscountRow');
const couponDiscountValue = $('#couponDiscountValue');
const deliveryFeeValue = $('#deliveryFeeValue');
const addMoreBtn = $('#addMoreBtn');

let selectedOrderType = 'dine-in';

// 주문 방식/쿠폰 선택에 따라 할인·배달비·최종 금액·주문 가능 여부를 계산한다
function computeOrderSummary(cart) {
  const subtotal = getCartTotal();
  const couponDiscount = couponCheckbox.checked ? Math.round(subtotal * COUPON_DISCOUNT_RATE) : 0;

  let deliveryFee = 0;
  let isDeliveryBlocked = false;

  if (selectedOrderType === 'delivery') {
    if (subtotal < DELIVERY_MIN_ORDER) {
      isDeliveryBlocked = cart.length > 0;
    } else {
      deliveryFee = subtotal < DELIVERY_FREE_THRESHOLD ? DELIVERY_FEE : 0;
    }
  }

  const total = Math.max(0, subtotal - couponDiscount + deliveryFee);
  return { subtotal, couponDiscount, deliveryFee, total, isDeliveryBlocked };
}

function renderBasket() {
  const cart = getCart();

  addMoreBtn.classList.toggle('is-hidden', cart.length === 0);

  if (cart.length === 0) {
    basketItemsContainer.innerHTML = `
      <div class="empty-basket">
        <p>장바구니가 비어 있습니다.</p>
        <a href="../menus/list.html" class="empty-basket-btn">메뉴 보러가기</a>
      </div>
    `;
    updateSummary();
    return;
  }

  basketItemsContainer.innerHTML = cart.map(item => `
    <div class="basket-item" data-id="${escapeHtml(item.menuId)}" data-temp="${escapeHtml(item.temperature || '')}">
      <div class="item-info">
        <span class="item-category">${escapeHtml(getCategoryName(item.category))}</span>
        <span class="item-name">${escapeHtml(formatItemName(item))}</span>
        <span class="item-price">${formatPrice(item.price)}</span>
      </div>
      <div class="item-actions">
        <div class="quantity-control">
          <button class="quantity-btn decrease-btn" type="button" data-id="${escapeHtml(item.menuId)}" data-temp="${escapeHtml(item.temperature || '')}">-</button>
          <span class="quantity-val">${item.quantity}</span>
          <button class="quantity-btn increase-btn" type="button" data-id="${escapeHtml(item.menuId)}" data-temp="${escapeHtml(item.temperature || '')}">+</button>
        </div>
        <button class="remove-btn" type="button" data-id="${escapeHtml(item.menuId)}" data-temp="${escapeHtml(item.temperature || '')}">삭제</button>
      </div>
    </div>
  `).join('');

  updateSummary();

  // 이벤트 바인딩
  addEventListeners();
}

function updateSummary() {
  const cart = getCart();
  const { subtotal, couponDiscount, deliveryFee, total, isDeliveryBlocked } = computeOrderSummary(cart);

  itemsTotal.textContent = formatPrice(subtotal);

  couponDiscountRow.classList.toggle('is-hidden', couponDiscount === 0);
  couponDiscountValue.textContent = `-${formatPrice(couponDiscount)}`;

  deliveryFeeValue.textContent = formatPrice(deliveryFee);

  if (isDeliveryBlocked) {
    const shortfall = DELIVERY_MIN_ORDER - subtotal;
    deliveryWarning.textContent = `배달은 최소 주문금액 ${formatPrice(DELIVERY_MIN_ORDER)}부터 가능합니다. ${formatPrice(shortfall)} 더 담아주세요.`;
    deliveryWarning.classList.remove('is-hidden');
  } else {
    deliveryWarning.classList.add('is-hidden');
  }

  finalTotal.textContent = formatPrice(total);
  orderSubmitBtn.disabled = cart.length === 0 || isDeliveryBlocked;
}

function addEventListeners() {
  // 수량 감소
  basketItemsContainer.querySelectorAll('.decrease-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.dataset.id;
      const temp = e.target.dataset.temp || null;
      const cart = getCart();
      const item = cart.find(c => String(c.menuId) === String(menuId) && (c.temperature || null) === temp);
      if (item) {
        updateCartQuantity(menuId, item.quantity - 1, temp);
        renderBasket();
      }
    });
  });

  // 수량 증가
  basketItemsContainer.querySelectorAll('.increase-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.dataset.id;
      const temp = e.target.dataset.temp || null;
      const cart = getCart();
      const item = cart.find(c => String(c.menuId) === String(menuId) && (c.temperature || null) === temp);
      if (item) {
        updateCartQuantity(menuId, item.quantity + 1, temp);
        renderBasket();
      }
    });
  });

  // 아이템 삭제
  basketItemsContainer.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const menuId = e.target.dataset.id;
      const temp = e.target.dataset.temp || null;
      removeFromCart(menuId, temp);
      renderBasket();
    });
  });
}

// 주문 방식 선택 (매장/포장/배달)
orderTypeButtons.addEventListener('click', (e) => {
  const btn = e.target.closest('.order-type-btn');
  if (!btn) return;

  $$('.order-type-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedOrderType = btn.dataset.type;
  updateSummary();
});

// 쿠폰 사용 체크박스
couponCheckbox.addEventListener('change', () => {
  updateSummary();
});

// 주문 완료 처리
orderSubmitBtn.addEventListener('click', () => {
  const cart = getCart();
  if (cart.length === 0 || orderSubmitBtn.disabled) return;

  const { subtotal, couponDiscount, deliveryFee, total, isDeliveryBlocked } = computeOrderSummary(cart);
  if (isDeliveryBlocked) return;

  createOrder(cart, total, {
    orderType: selectedOrderType,
    subtotal,
    couponDiscount,
    deliveryFee
  });

  alert('주문이 완료되었습니다!');
  clearCart();

  // 주문 내역 목록 페이지로 이동 (없으면 일단 홈으로)
  window.location.href = '../orders/list.html';
});

// 초기 렌더링
renderBasket();

import {
  getOrderById,
  formatDate,
  formatPrice,
  getStatusLabel,
  getCategoryName,
  formatItemName,
  getOrderTypeLabel,
  escapeHtml,
  $
} from '../js/utils.js';

const orderDetailContainer = $('#orderDetailCard');

function renderOrderDetail() {
  const params = new URLSearchParams(window.location.search);
  const orderId = params.get('id');

  if (!orderId) {
    showError('주문 ID가 존재하지 않습니다.');
    return;
  }

  const order = getOrderById(orderId);
  if (!order) {
    showError('해당 주문을 찾을 수 없습니다.');
    return;
  }

  // HTML 구성
  const itemsHtml = order.items.map(item => `
    <div class="detail-item">
      <div class="item-meta">
        <span class="item-cat">${escapeHtml(getCategoryName(item.category))}</span>
        <span class="item-name">${escapeHtml(formatItemName(item))}</span>
      </div>
      <div class="item-calc">
        <span class="unit-price-qty">${formatPrice(item.price)} × ${item.quantity}</span>
        <span class="item-subtotal">${formatPrice(item.price * item.quantity)}</span>
      </div>
    </div>
  `).join('');

  orderDetailContainer.innerHTML = `
    <div class="detail-header">
      <div class="detail-title-group">
        <span class="detail-date">${formatDate(order.createdAt)}</span>
        <h3 class="detail-id">주문번호: ${order.id}</h3>
      </div>
      <span class="status-badge status-${order.status}">${getStatusLabel(order.status)}</span>
    </div>

    <div class="detail-section">
      <h4 class="section-title">주문 메뉴</h4>
      <div class="detail-items-list">
        ${itemsHtml}
      </div>
    </div>

    <div class="detail-section">
      <h4 class="section-title">결제 정보</h4>
      <div class="payment-summary">
        <div class="summary-row">
          <span>주문 방식</span>
          <span>${getOrderTypeLabel(order.orderType || 'dine-in')}</span>
        </div>
        <div class="summary-row">
          <span>상품 금액</span>
          <span>${formatPrice(order.subtotal ?? order.total)}</span>
        </div>
        ${order.couponDiscount ? `
        <div class="summary-row">
          <span>쿠폰 할인</span>
          <span>-${formatPrice(order.couponDiscount)}</span>
        </div>` : ''}
        <div class="summary-row">
          <span>배달팁</span>
          <span>${formatPrice(order.deliveryFee || 0)}</span>
        </div>
        <div class="summary-row total-row">
          <span>최종 결제 금액</span>
          <strong class="total-price">${formatPrice(order.total)}</strong>
        </div>
      </div>
    </div>

    <div class="detail-section">
      <h4 class="section-title">주문 진행 정보</h4>
      <div class="order-progress-info">
        <div class="progress-row">
          <span class="progress-label">주문 일시</span>
          <span class="progress-value">${formatDate(order.createdAt)}</span>
        </div>
        ${order.completedAt ? `
        <div class="progress-row">
          <span class="progress-label">완료 일시</span>
          <span class="progress-value">${formatDate(order.completedAt)}</span>
        </div>
        ` : ''}
        <div class="progress-row">
          <span class="progress-label">현재 상태</span>
          <span class="progress-value highlight-status status-${order.status}">${getStatusLabel(order.status)}</span>
        </div>
      </div>
    </div>
  `;
}

function showError(message) {
  orderDetailContainer.innerHTML = `
    <div class="error-card">
      <div class="error-icon">⚠️</div>
      <p class="error-message">${escapeHtml(message)}</p>
      <a href="list.html" class="error-btn">주문 내역으로 돌아가기</a>
    </div>
  `;
}

// 초기 실행
renderOrderDetail();

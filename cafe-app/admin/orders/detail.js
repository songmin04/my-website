import { getOrders, updateOrderStatus, formatPrice, formatDate, getStatusLabel, formatItemName, getOrderTypeLabel } from '../../js/utils.js';
import { ORDER_STATUS } from '../../js/data.js';

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const orderId = urlParams.get('id');

  const orders = getOrders() || [];
  const order = orders.find(o => o.id === orderId);

  if (!order) {
    alert('존재하지 않는 주문입니다.');
    location.href = 'list.html';
    return;
  }

  renderOrder(order);

  // 주문 아이템 렌더링 (상태 변경과 무관하게 한 번만 그리면 됨)
  const container = document.getElementById('orderItemsContainer');
  container.innerHTML = order.items.map(item => `
    <div class="order-item-row">
      <div class="item-info">
        <div class="item-name">${formatItemName(item)} (${item.quantity}개)</div>
        <div class="item-options">${item.options ? item.options.join(', ') : '기본'}</div>
      </div>
      <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
    </div>
  `).join('');

  // 우측 상태변경 처리 액션 핸들러
  const actionBtn = document.getElementById('btnNextStatus');

  actionBtn.addEventListener('click', () => {
    let nextStatus = '';
    if (order.status === ORDER_STATUS.PENDING.value) nextStatus = ORDER_STATUS.PREPARING.value;
    else if (order.status === ORDER_STATUS.PREPARING.value) nextStatus = ORDER_STATUS.COMPLETED.value;
    else return; // 이미 완료/취소된 건 작동 중지

    updateOrderStatus(order.id, nextStatus);
    order.status = nextStatus;
    renderOrder(order);
  });
});

function renderOrder(order) {
  // 기본 정보 표시
  document.getElementById('orderId').textContent = `#${order.id}`;
  document.getElementById('orderTime').textContent = formatDate(order.createdAt);
  document.getElementById('orderType').textContent = getOrderTypeLabel(order.orderType || 'dine-in');
  document.getElementById('totalPrice').textContent = formatPrice(order.total || 0);

  // 상태 배지 제어
  const badge = document.getElementById('currentStatusBadge');
  badge.textContent = getStatusLabel(order.status);
  badge.className = 'badge ' + getStatusClass(order.status);

  updateActionBtn(order.status, document.getElementById('btnNextStatus'));
}

function getStatusClass(status) {
  if (status === ORDER_STATUS.PENDING.value || status === ORDER_STATUS.CONFIRMED.value) return 'waiting';
  if (status === ORDER_STATUS.PREPARING.value) return 'cooking';
  if (status === ORDER_STATUS.CANCELLED.value) return 'cancelled';
  return 'ready';
}

function updateActionBtn(status, btn) {
  if (status === ORDER_STATUS.PENDING.value) {
    btn.textContent = '☕ 제조 시작하기';
    btn.style.backgroundColor = '';
    btn.style.display = 'block';
  } else if (status === ORDER_STATUS.PREPARING.value) {
    btn.textContent = '✅ 제조 완료 (고객 호출)';
    btn.style.backgroundColor = '#2e7d32';
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none'; // 완료/취소 건은 버튼 비활성화
  }
}
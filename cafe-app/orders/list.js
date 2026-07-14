import {
  getOrders,
  formatDate,
  formatPrice,
  getStatusLabel,
  formatItemName,
  $
} from '../js/utils.js';

const ordersListContainer = $('#ordersList');

function renderOrders() {
  const orders = getOrders();

  // 최신 주문이 위로 오도록 정렬
  const sortedOrders = [...orders].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (sortedOrders.length === 0) {
    ordersListContainer.innerHTML = `
      <div class="empty-orders">
        <div class="empty-icon">📋</div>
        <p>주문 내역이 없습니다.</p>
        <a href="../menus/list.html" class="shop-btn">메뉴 주문하러 가기</a>
      </div>
    `;
    return;
  }

  ordersListContainer.innerHTML = sortedOrders.map(order => {
    // 주문 상품 요약 문구 생성
    const firstItemName = order.items[0] ? formatItemName(order.items[0]) : '메뉴';
    const totalQuantity = order.items.reduce((sum, item) => sum + item.quantity, 0);
    const itemSummary = order.items.length > 1 
      ? `${firstItemName} 외 ${order.items.length - 1}개 (총 ${totalQuantity}개)`
      : `${firstItemName} ${totalQuantity}개`;

    return `
      <div class="order-card" data-id="${order.id}">
        <div class="order-card-header">
          <div class="order-info">
            <span class="order-date">${formatDate(order.createdAt)}</span>
            <span class="order-id">주문번호: ${order.id}</span>
          </div>
          <span class="status-badge status-${order.status}">${getStatusLabel(order.status)}</span>
        </div>
        <div class="order-card-body">
          <div class="order-summary-text">${itemSummary}</div>
          <div class="order-price">${formatPrice(order.total)}</div>
        </div>
        <div class="order-card-footer">
          <a href="detail.html?id=${order.id}" class="detail-link-btn">주문 상세 보기</a>
        </div>
      </div>
    `;
  }).join('');
}

// 초기 실행
renderOrders();

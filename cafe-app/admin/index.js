import { getOrders, formatPrice, formatDate, getStatusLabel, formatItemName } from '../js/utils.js';
import { ORDER_STATUS } from '../js/data.js';

document.addEventListener('DOMContentLoaded', () => {
  // 현재 날짜 표시 업데이트
  const today = new Date();
  document.getElementById('currentDate').textContent = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

  const orders = getOrders() || [];

  // 데이터 계산
  let todaySales = 0;
  let newOrdersCount = 0;
  let completedOrdersCount = 0;

  orders.forEach(order => {
    if (order.status === ORDER_STATUS.PENDING.value) newOrdersCount++;
    if (order.status === ORDER_STATUS.COMPLETED.value) {
      completedOrdersCount++;
      todaySales += order.total || 0;
    }
  });

  // DOM 반영
  document.getElementById('todaySales').textContent = formatPrice(todaySales);
  document.getElementById('newOrdersCount').textContent = `${newOrdersCount}건`;
  document.getElementById('completedOrdersCount').textContent = `${completedOrdersCount}건`;

  // 최근 주문 5개 렌더링
  const recentOrders = orders.slice(-5).reverse();
  const tableBody = document.getElementById('recentOrdersTable');

  if (recentOrders.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#8d6e63;">접수된 주문이 없습니다.</td></tr>`;
    return;
  }

  tableBody.innerHTML = recentOrders.map(order => {
    const summaryText = (order.items || []).map(i => `${formatItemName(i)} x${i.quantity}`).join(', ');
    return `
    <tr style="cursor: pointer;" onclick="location.href='/admin/orders/detail.html?id=${order.id}'">
      <td>#${order.id.slice(-4)}</td>
      <td>${formatDate(order.createdAt)}</td>
      <td>${summaryText}</td>
      <td>${formatPrice(order.total || 0)}</td>
      <td><span class="badge ${getStatusClass(order.status)}">${getStatusLabel(order.status)}</span></td>
    </tr>
  `;
  }).join('');
});

function getStatusClass(status) {
  if (status === ORDER_STATUS.PENDING.value || status === ORDER_STATUS.CONFIRMED.value) return 'waiting';
  if (status === ORDER_STATUS.PREPARING.value) return 'cooking';
  if (status === ORDER_STATUS.CANCELLED.value) return 'cancelled';
  return 'ready';
}
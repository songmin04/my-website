//  js/js/ 오타 완벽 제거 및 정상 상위 경로 지정
import { getOrders, updateOrderStatus, formatPrice, formatDate, formatItemName, $, $$ } from '../../js/utils.js';
import { ORDER_STATUS } from '../../js/data.js';

document.addEventListener('DOMContentLoaded', () => {
  let currentFilter = 'all';
  
  function renderOrders() {
    const orders = getOrders();
    const tableBody = $('#allOrdersTable');
    
    if (!tableBody) return; // 테이블 요소를 못 찾았을 때의 방어 코드
    
    // 조건 필터링 검사
    const filteredOrders = currentFilter === 'all' 
      ? orders 
      : orders.filter(o => o.status === currentFilter);

    if (filteredOrders.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#8d6e63; padding:3rem 0;">조건에 해당하는 주문이 존재하지 않습니다.</td></tr>`;
      return;
    }

    // 접수 최신순 배치
    tableBody.innerHTML = filteredOrders.slice().reverse().map(order => {
      // items 데이터 안정성 확보를 위한 방어 코드
      const itemsList = order.items || [];
      const summaryItems = itemsList.map(i => `${formatItemName(i)} x${i.quantity}`).join(', ');

      return `
        <tr>
          <td style="cursor:pointer;" onclick="location.href='detail.html?id=${order.id}'"><strong>#${order.id.slice(-5)}</strong></td>
          <td>${formatDate(order.createdAt)}</td>
          <td style="cursor:pointer;" onclick="location.href='detail.html?id=${order.id}'">${summaryItems}</td>
          <td>${formatPrice(order.total || 0)}</td>
          <td>
            <select class="status-select" data-id="${order.id}">
              ${Object.values(ORDER_STATUS).map(s => `<option value="${s.value}" ${order.status === s.value ? 'selected' : ''}>${s.label}</option>`).join('')}
            </select>
          </td>
        </tr>
      `;
    }).join('');

    // 셀렉트 박스 목록 상태 제어 바인딩
    $$('.status-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const orderId = e.target.dataset.id;
        const targetStatus = e.target.value;
        
        // utils.js의 상태 변경 트리거 호출 실행
        updateOrderStatus(orderId, targetStatus);
        renderOrders(); 
      });
    });
  }

  // 상단 탭 필터 스위칭 이벤트 리스너 등록
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.status;
      renderOrders();
    });
  });

  renderOrders();
});
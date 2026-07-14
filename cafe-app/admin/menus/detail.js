import { getMenuById, deleteMenu, CATEGORIES } from '../../js/data.js';
import { formatPrice, escapeHtml, $, getCategoryName } from '../../js/utils.js';

const params = new URLSearchParams(window.location.search);
const menuId = params.get('id');
const pageTitle = $('#pageTitle');
const headerActions = $('#headerActions');
const detailCard = $('#detailCard');

function renderNotFound() {
  pageTitle.textContent = '메뉴를 찾을 수 없습니다';
  headerActions.innerHTML = '<a class="primary-action" href="create">메뉴 추가</a>';
  detailCard.innerHTML = `
    <div class="empty-state">
      <p>삭제되었거나 존재하지 않는 메뉴입니다.</p>
      <a class="action-button" href="list">목록으로 돌아가기</a>
    </div>
  `;
}

function renderDetail(menu) {
  pageTitle.textContent = menu.name;
  headerActions.innerHTML = `
    <a class="primary-action" href="edit?id=${encodeURIComponent(menu.id)}">수정</a>
    <button class="danger-action" type="button" id="deleteButton">삭제</button>
  `;

  const image = menu.image
    ? `<img src="${escapeHtml(menu.image)}" alt="${escapeHtml(menu.name)}">`
    : '<span>이미지 없음</span>';

  detailCard.innerHTML = `
    <div class="detail-layout">
      <div class="menu-visual">${image}</div>
      <div class="menu-meta">
        <span class="category-pill">${escapeHtml(getCategoryName(menu.category))}</span>
        <div>
          <h2>${escapeHtml(menu.name)}</h2>
          <p class="price">${formatPrice(menu.price)}</p>
        </div>
        <p class="description">${escapeHtml(menu.description || '설명이 없습니다.')}</p>
        <div class="info-grid">
          <div class="info-item">
            <span>메뉴 ID</span>
            <strong>${escapeHtml(menu.id)}</strong>
          </div>
          <div class="info-item">
            <span>카테고리 코드</span>
            <strong>${escapeHtml(menu.category)}</strong>
          </div>
          <div class="info-item">
            <span>이미지 URL</span>
            <strong>${menu.image ? escapeHtml(menu.image) : '미등록'}</strong>
          </div>
          <div class="info-item">
            <span>판매 상태</span>
            <strong>판매중</strong>
          </div>
        </div>
        <div class="detail-actions">
          <a href="list">목록</a>
          <a class="primary-action" href="edit?id=${encodeURIComponent(menu.id)}">수정하기</a>
        </div>
      </div>
    </div>
  `;

  $('#deleteButton').addEventListener('click', () => {
    if (confirm(`'${menu.name}' 메뉴를 삭제할까요?`)) {
      deleteMenu(menu.id);
      window.location.href = 'list';
    }
  });
}

const menu = getMenuById(menuId);

if (menu) {
  renderDetail(menu);
} else {
  renderNotFound();
}

// 청사진 폴더 구조에 맞춘 정확한 상대 경로 (상위로 3번 이동)
import { getStoredMenus, CATEGORIES } from '../../../js/data.js';

const menuGrid = document.getElementById('menuGrid');
const tabButtons = document.querySelectorAll('.tab-btn');

// 1. 데이터 로드 확인
const menus = getStoredMenus();

// 2. 카테고리 매핑 생성 (ID -> 한글명)
const categoryMap = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat.name;
  return acc;
}, {});

// 3. 메뉴 리스트 렌더링 함수
function renderMenus(categoryFilter = 'all') {
  // 기존 그리드 초기화
  menuGrid.innerHTML = '';

  // 필터링 처리
  const filteredMenus = categoryFilter === 'all' 
    ? menus 
    : menus.filter(menu => menu.category === categoryFilter);

  // 데이터가 없을 때 예외 처리
  if (!filteredMenus || filteredMenus.length === 0) {
    menuGrid.innerHTML = `
      <p style="grid-column: 1/-1; text-align: center; color: #888; padding: 5rem 0;">
        등록된 메뉴가 없습니다.
      </p>`;
    return;
  }

  // 메뉴 카드 동적 생성
  filteredMenus.forEach(menu => {
    const card = document.createElement('article');
    card.className = 'menu-card';
    
    card.innerHTML = `
      <div class="card-body">
        <span class="menu-category">${categoryMap[menu.category] || menu.category}</span>
        <h3>${menu.name}</h3>
        <p class="menu-desc">${menu.description || '설명이 없습니다.'}</p>
      </div>
      <div class="card-footer-wrapper">
        <div class="card-footer">
          <span class="menu-price">${Number(menu.price).toLocaleString()}원</span>
          <span class="status-badge available">판매중</span>
        </div>
        <div class="card-actions">
          <a href="./detail.html?id=${menu.id}" class="btn-sm btn-secondary">상세보기</a>
          <a href="./edit.html?id=${menu.id}" class="btn-sm btn-outline">수정</a>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
}

// 4. 탭 클릭 이벤트 설정
tabButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    const category = e.target.getAttribute('data-category');
    renderMenus(category);
  });
});

// 5. 페이지 진입 시 최초 렌더링 실행
renderMenus();
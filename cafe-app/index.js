// ==========================================================================
// ☕ Cafe App - Main Page JavaScript (index.js)
// ==========================================================================

import { getStoredMenus, CATEGORIES } from './js/data.js';
import { addToCart as addMenuToCart } from './js/utils.js';

// 1. 카테고리 매핑 생성 (ID -> 한글명)
const categoryMap = CATEGORIES.reduce((acc, cat) => {
  acc[cat.id] = cat.name;
  return acc;
}, {});

// 2. 추천 메뉴 선정 (카테고리별 첫 번째 아이템을 추천 메뉴로 동적 노출)
function getRecommendedMenus(menus) {
  const recommended = [];
  const categoriesSeen = new Set();

  for (const menu of menus) {
    if (!categoriesSeen.has(menu.category)) {
      recommended.push(menu);
      categoriesSeen.add(menu.category);
    }
    // 최대 4개 노출
    if (recommended.length === 4) break;
  }

  // 만약 4개가 안된다면 전체 메뉴 중 중복 없이 앞에서 채움
  if (recommended.length < 4) {
    for (const menu of menus) {
      if (!recommended.some(r => r.id === menu.id)) {
        recommended.push(menu);
      }
      if (recommended.length === 4) break;
    }
  }

  return recommended;
}

// 3. 장바구니 추가 (js/utils.js의 공용 장바구니 로직 사용)
function addToCart(menu) {
  // HOT/ICE 둘 다 가능한 메뉴는 기본값(ICE)으로 담고, 상세 페이지에서 온도를 바꿀 수 있다
  const defaultTemp = menu.temperature === 'hot' ? 'hot' : menu.temperature ? 'ice' : null;
  addMenuToCart(menu.id, 1, defaultTemp);

  // 알림 애니메이션이나 alert 창 띄우기
  alert(`🛒 [${menu.name}] 상품이 장바구니에 담겼습니다!`);
}

// 4. 추천 메뉴 렌더링 실행
function init() {
  const recommendGrid = document.getElementById('recommendGrid');
  if (!recommendGrid) return;

  const menus = getStoredMenus();
  const recommendedList = getRecommendedMenus(menus);

  recommendGrid.innerHTML = '';

  recommendedList.forEach(menu => {
    const card = document.createElement('article');
    card.className = 'recommend-card';

    const koreanCategory = categoryMap[menu.category] || menu.category;
    const formattedPrice = Number(menu.price).toLocaleString() + '원';

    card.innerHTML = `
      <div class="card-content">
        <span class="card-category">${koreanCategory}</span>
        <h3 class="card-title">${menu.name}</h3>
        <p class="card-desc">${menu.description || 'Cafe App이 정성스레 준비한 스페셜 메뉴입니다.'}</p>
        <div class="card-footer">
          <span class="card-price">${formattedPrice}</span>
          <button class="btn-card-order" data-id="${menu.id}">담기</button>
        </div>
      </div>
    `;

    // 담기 버튼 이벤트 리스너 추가
    const orderBtn = card.querySelector('.btn-card-order');
    orderBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // 카드 클릭 이벤트와 전파 방지
      addToCart(menu);
    });

    // 카드 자체를 클릭하면 메뉴 상세 페이지로 이동하도록 설정
    card.style.cursor = 'pointer';
    card.addEventListener('click', () => {
      window.location.href = `menus/detail?id=${menu.id}`;
    });

    recommendGrid.appendChild(card);
  });
}

// DOM 콘텐츠가 모두 로드되면 초기화 함수 실행
document.addEventListener('DOMContentLoaded', init);

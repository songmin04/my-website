import { getStoredMenus, CATEGORIES } from "../js/data.js";
import { $, $$, addToCart } from "../js/utils.js";

const menuDetailContainer = $("#menuDetail");

// 1. URL에서 menu id 가져오기
const urlParams = new URLSearchParams(window.location.search);
const menuId = parseInt(urlParams.get("id"), 10);

const menus = getStoredMenus();
const menu = menus.find((m) => m.id === menuId);

function renderDetail() {
  if (!menu) {
    menuDetailContainer.innerHTML = `
      <div class="error-box">
        <p>존재하지 않거나 삭제된 메뉴입니다.</p>
        <a href="list.html" class="btn btn-primary">메뉴 목록으로 돌아가기</a>
      </div>
    `;
    return;
  }

  const categoryName = CATEGORIES.find((cat) => cat.id === menu.category)?.name || menu.category;
  let quantity = 1;
  // HOT/ICE 둘 다 가능한 메뉴는 ICE를 기본값으로 시작
  let selectedTemp = menu.temperature === "hot" ? "hot" : menu.temperature ? "ice" : null;
  // 음료 중 카페인이 없는 메뉴에만 논카페인 배지 표시 (베이커리·디저트 제외)
  const isNonCaffeine = Boolean(menu.temperature) && menu.nutrition?.caffeine === 0;
  // ml당 카페인 0.15mg 이상인 음료는 고카페인 표시 (베이커리·디저트 제외)
  const isHighCaffeine =
    Boolean(menu.temperature) &&
    menu.nutrition?.servingUnit === "mL" &&
    menu.nutrition.caffeine / menu.nutrition.servingSize >= 0.15;

  menuDetailContainer.innerHTML = `
    <div class="detail-card">
      <div class="detail-body">
        <span class="menu-category">${categoryName}</span>
        ${isNonCaffeine ? '<span class="badge-decaf">논카페인</span>' : ""}
        ${isHighCaffeine ? '<span class="label-highcaf">고카페인</span>' : ""}
        <h3 class="menu-title">${menu.name}</h3>
        <p class="menu-desc">${menu.description || "등록된 설명이 없습니다."}</p>

        <div class="price-row">
          <span class="price-label">금액</span>
          <span class="menu-price" id="singlePrice">${menu.price.toLocaleString()}원</span>
        </div>
      </div>

      ${renderTemperatureSection(menu.temperature)}

      ${renderNutritionSection(menu.nutrition, menu.allergens, menu.origin)}

      <div class="detail-footer-wrapper">
        <!-- 수량 조절 컴포넌트 -->
        <div class="quantity-selector">
          <span class="quantity-label">수량</span>
          <div class="quantity-controls">
            <button type="button" class="qty-btn" id="minusBtn">−</button>
            <span class="qty-count" id="qtyCount">1</span>
            <button type="button" class="qty-btn" id="plusBtn">+</button>
          </div>
        </div>

        <!-- 총 금액 및 장바구니 버튼 -->
        <div class="total-row">
          <span class="total-label">총 주문 금액</span>
          <span class="total-price" id="totalPrice">${menu.price.toLocaleString()}원</span>
        </div>

        <button type="button" class="btn btn-primary btn-block" id="addBasketBtn">🛒 장바구니 담기</button>
      </div>
    </div>
  `;

  // DOM 요소 잡기
  const minusBtn = $("#minusBtn");
  const plusBtn = $("#plusBtn");
  const qtyCount = $("#qtyCount");
  const totalPrice = $("#totalPrice");
  const addBasketBtn = $("#addBasketBtn");

  // 수량 변동 및 총액 계산 업데이트 함수
  function updatePrice() {
    qtyCount.textContent = quantity;
    totalPrice.textContent = `${(menu.price * quantity).toLocaleString()}원`;
  }

  // 플러스 버튼 클릭
  plusBtn.addEventListener("click", () => {
    quantity++;
    updatePrice();
  });

  // 마이너스 버튼 클릭
  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updatePrice();
    }
  });

  // 장바구니 담기 버튼 클릭
  addBasketBtn.addEventListener("click", () => {
    addToCart(menu.id, quantity, selectedTemp);
    showCartModal();
  });

  // HOT/ICE 선택 버튼 (둘 다 가능한 메뉴만 렌더링됨)
  $$(".temp-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTemp = btn.dataset.temp;
      $$(".temp-btn").forEach((b) => b.classList.toggle("active", b === btn));
    });
  });

  const nutritionToggle = $("#nutritionToggle");
  if (nutritionToggle) {
    nutritionToggle.addEventListener("click", () => {
      const panel = $("#nutritionPanel");
      const isOpen = !panel.hidden;
      panel.hidden = isOpen;
      nutritionToggle.classList.toggle("open", !isOpen);
    });
  }
}

function renderTemperatureSection(temperature) {
  if (!temperature) return "";

  if (temperature === "hot") {
    return `
      <div class="temp-selector">
        <span class="temp-label">온도</span>
        <div class="temp-fixed">🔥 HOT ONLY</div>
      </div>
    `;
  }

  if (temperature === "ice") {
    return `
      <div class="temp-selector">
        <span class="temp-label">온도</span>
        <div class="temp-fixed">🧊 ICED ONLY</div>
      </div>
    `;
  }

  return `
    <div class="temp-selector">
      <span class="temp-label">온도</span>
      <div class="temp-controls">
        <button type="button" class="temp-btn" data-temp="hot">🔥 HOT</button>
        <button type="button" class="temp-btn active" data-temp="ice">🧊 ICE</button>
      </div>
    </div>
  `;
}

function renderNutritionSection(nutrition, allergens, origin) {
  if (!nutrition) return "";

  const servingLabel = nutrition.servingUnit === "g" ? "중량 (g)" : "컵용량 (mL)";
  const triggers = allergens?.triggers?.length ? allergens.triggers.join(", ") : "해당 없음";
  const facility = allergens?.facility?.length ? allergens.facility.join(", ") : "정보 없음";
  const originList = origin?.length ? origin : ["정보 없음"];

  return `
    <div class="nutrition-section">
      <button type="button" class="nutrition-toggle" id="nutritionToggle">
        <span>영양 &amp; 알레르기 정보</span>
        <span class="chevron">⌄</span>
      </button>
      <div class="nutrition-panel" id="nutritionPanel" hidden>
        <h4>영양정보</h4>
        <p class="nutrition-caption">1회 제공량 기준</p>
        <table class="nutrition-table">
          <tbody>
            <tr><th>구분</th><td>${nutrition.caffeineLevel}</td><th>${servingLabel}</th><td>${nutrition.servingSize}</td></tr>
            <tr><th>카페인 (mg)</th><td>${nutrition.caffeine}</td><th>칼로리 (kcal)</th><td>${nutrition.calories}</td></tr>
            <tr><th>나트륨 (mg)</th><td>${nutrition.sodium}</td><th>탄수화물 (g)</th><td>${nutrition.carbs}</td></tr>
            <tr><th>당류 (g)</th><td>${nutrition.sugar}</td><th>지방 (g)</th><td>${nutrition.fat}</td></tr>
            <tr><th>포화지방 (g)</th><td>${nutrition.saturatedFat}</td><th>단백질 (g)</th><td>${nutrition.protein}</td></tr>
          </tbody>
        </table>

        <h4>알레르기 유발성분</h4>
        <ul class="allergen-list">
          <li>알레르기 유발물질: ${triggers}</li>
          <li>원재료 제조시설 내 알레르기 유발 가능 식품 취급: ${facility}</li>
        </ul>

        <h4>원산지</h4>
        <ul class="origin-list">
          ${originList.map((o) => `<li>${o}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

// 장바구니 담기 완료 팝업 (확인 → 장바구니 이동, X → 현재 페이지에 남기)
const cartModalOverlay = $("#cartModalOverlay");
const cartModalClose = $("#cartModalClose");
const cartModalConfirm = $("#cartModalConfirm");

function showCartModal() {
  cartModalOverlay.classList.remove("is-hidden");
}

function hideCartModal() {
  cartModalOverlay.classList.add("is-hidden");
}

cartModalClose.addEventListener("click", hideCartModal);
cartModalConfirm.addEventListener("click", () => {
  window.location.href = "../basket/list.html";
});

renderDetail();
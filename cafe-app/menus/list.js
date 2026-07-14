import { getStoredMenus, CATEGORIES } from "../js/data.js";
import { $, $$ } from "../js/utils.js";

const menuGrid = $("#menuGrid");
const categoryTabs = $("#categoryTabs");

const menus = getStoredMenus();

function renderMenus(categoryFilter = "all") {
  menuGrid.innerHTML = "";

  const filteredMenus =
    categoryFilter === "all"
      ? menus
      : menus.filter((menu) => menu.category === categoryFilter);

  if (filteredMenus.length === 0) {
    menuGrid.innerHTML = `
      <p style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: var(--sp-2xl) 0;">
        등록된 메뉴가 없습니다.
      </p>
    `;
    return;
  }

  filteredMenus.forEach((menu) => {
    const categoryName = CATEGORIES.find(
      (cat) => cat.id === menu.category
    )?.name || menu.category;
    // 음료 중 카페인이 없는 메뉴에만 논카페인 배지 표시 (베이커리·디저트 제외)
    const isNonCaffeine = Boolean(menu.temperature) && menu.nutrition?.caffeine === 0;
    // ml당 카페인 0.15mg 이상인 음료는 고카페인 표시 (베이커리·디저트 제외)
    const isHighCaffeine =
      Boolean(menu.temperature) &&
      menu.nutrition?.servingUnit === "mL" &&
      menu.nutrition.caffeine / menu.nutrition.servingSize >= 0.15;

    const card = document.createElement("a");
    card.href = `./detail.html?id=${menu.id}`;
    card.className = "menu-card";

    card.innerHTML = `
      <div class="card-body">
        <span class="menu-category">${categoryName}</span>
        ${isNonCaffeine ? '<span class="badge-decaf">논카페인</span>' : ""}
        ${isHighCaffeine ? '<span class="label-highcaf">고카페인</span>' : ""}
        <h3>${menu.name}</h3>
        <p class="menu-desc">${menu.description || "설명 없음"}</p>
      </div>

      <div class="card-footer-wrapper">
        <div class="card-footer">
          <span class="menu-price">${menu.price.toLocaleString()}원</span>
        </div>
      </div>
    `;

    menuGrid.appendChild(card);
  });
}

categoryTabs.addEventListener("click", (e) => {
  if (e.target.classList.contains("tab-btn")) {
    $$(".tab-btn").forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    renderMenus(e.target.dataset.category);
  }
});

renderMenus();
import {
  getOrders,
  formatPrice,
  escapeHtml,
  $
} from '../js/utils.js';

// DOM 요소 잡기
const profileName = $('#profileName');
const userGrade = $('#userGrade');
const profilePhone = $('#profilePhone');
const inputName = $('#inputName');
const inputPhone = $('#inputPhone');
const profileForm = $('#profileForm');

const totalOrders = $('#totalOrders');
const totalSpent = $('#totalSpent');
const couponCount = $('#couponCount');

const stampsContainer = $('#stampsContainer');
const stampStatus = $('#stampStatus');

// 💡 전화번호 자동 대시(-) 삽입 함수
function formatPhoneNumber(value) {
  if (!value) return value;
  
  // 숫자만 남기기
  const phoneNumber = value.replace(/[^\d]/g, '');
  const len = phoneNumber.length;

  // 국전화번호 및 핸드폰 번호 포맷팅 (010-XXXX-XXXX 또는 02-XXX-XXXX 등 지원)
  if (len < 4) return phoneNumber;
  if (len < 7) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  }
  if (len < 11) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
  }
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 7)}-${phoneNumber.slice(7, 11)}`;
}

// 1. 유저 정보 로드 / 초기화
function loadProfile() {
  const name = localStorage.getItem('cafe_user_name') || '홍길동';
  const phone = localStorage.getItem('cafe_user_phone') || '010-1234-5678';

  // 이름 렌더링 시 연필 버튼까지 한꺼번에 함께 생성합니다.
  profileName.innerHTML = `
    <span class="name-text">${escapeHtml(name)}</span> 
    <span class="suffix">고객님</span>
    <button type="button" class="edit-toggle-btn" id="editToggleBtn" aria-label="프로필 수정">✏️</button>
  `;
  
  // innerHTML로 재생성된 연필 버튼에 토글 클릭 이벤트를 바인딩합니다.
  $('#editToggleBtn').addEventListener('click', toggleEditForm);

  profilePhone.textContent = phone;
  inputName.value = name;
  inputPhone.value = formatPhoneNumber(phone); // 로드할 때도 포맷팅 적용

  // 누적 주문액 정보 불러와 등급 결정
  const orders = getOrders();
  const spentSum = orders.reduce((sum, order) => sum + order.total, 0);

  if (spentSum >= 50000 || orders.length >= 5) {
    userGrade.textContent = 'GOLD 등급';
    userGrade.className = 'user-grade badge-gold';
  } else {
    userGrade.textContent = 'SILVER 등급';
    userGrade.className = 'user-grade badge-silver';
  }
}

// 프로필 수정 폼 열고 닫기 핸들러
function toggleEditForm() {
  profileForm.classList.toggle('is-hidden');
}

// 💡 연락처 입력창에 입력할 때마다 실시간으로 대시(-) 자동 완성 적용
inputPhone.addEventListener('input', (e) => {
  e.target.value = formatPhoneNumber(e.target.value);
});

// 2. 활동 현황 및 스탬프 렌더링
function renderStatsAndStamps() {
  const orders = getOrders();
  const spentSum = orders.reduce((sum, order) => sum + order.total, 0);

  // 음료 수량 계산 (스탬프 적립)
  const totalDrinks = orders.reduce((sum, order) => {
    return sum + order.items.reduce((itemSum, item) => itemSum + item.quantity, 0);
  }, 0);

  // 10개 단위로 쿠폰 지급했다고 치고 남은 스탬프 수량 계산 (최대 10개 노출)
  const currentStamps = totalDrinks % 10;
  const freeCouponsAwarded = Math.floor(totalDrinks / 10);
  const totalCoupons = 2 + freeCouponsAwarded; // 기본 2장 + 스탬프 완주 쿠폰

  // 통계값 반영
  totalOrders.textContent = `${orders.length}회`;
  totalSpent.textContent = formatPrice(spentSum);
  couponCount.textContent = `${totalCoupons}장`;

  // 스탬프 컨테이너 렌더링
  stampsContainer.innerHTML = '';
  for (let i = 1; i <= 10; i++) {
    const stampEl = document.createElement('div');
    stampEl.className = 'stamp-slot';
    if (i <= currentStamps) {
      stampEl.classList.add('active');
      stampEl.innerHTML = '☕';
    } else {
      stampEl.innerHTML = i;
    }
    stampsContainer.appendChild(stampEl);
  }

  stampStatus.textContent = `스탬프 적립 현황: ${currentStamps} / 10`;
}

// 3. 프로필 수정
profileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newName = inputName.value.trim();
  const newPhone = inputPhone.value.trim();

  if (!newName || newPhone.length < 12) { // 대시 포함 최소 12자 이상 유효성 검사 (010-XXX-XXXX)
    alert('이름과 올바른 형식의 연락처를 입력해주세요.');
    return;
  }

  localStorage.setItem('cafe_user_name', newName);
  localStorage.setItem('cafe_user_phone', newPhone);

  alert('회원 정보가 성공적으로 수정되었습니다.');
  loadProfile();
  profileForm.classList.add('is-hidden'); // 수정 완료 후 창 닫기
});

// 초기 실행
loadProfile();
renderStatsAndStamps();
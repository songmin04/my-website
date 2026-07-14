import { addMenu } from '../../js/data.js';
import { generateId, $ } from '../../js/utils.js';

const createForm = $('#createForm');
const cancelBtn = $('#cancelBtn');

if (cancelBtn) {
  cancelBtn.addEventListener('click', () => {
    window.location.href = 'list.html';
  });
}

if (createForm) {
  createForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = $('#name').value.trim();
    const category = $('#category').value;
    const price = parseInt($('#price').value, 10);
    const image = $('#image').value.trim();
    const description = $('#description').value.trim();

    if (!name || !category || isNaN(price)) {
      alert('필수 입력 항목을 채워주세요.');
      return;
    }

    const newMenu = {
      id: generateId(),
      name,
      category,
      price,
      description,
      image
    };

    addMenu(newMenu);
    alert('새 메뉴가 등록되었습니다!');
    window.location.href = 'list.html';
  });
}

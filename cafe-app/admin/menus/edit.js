import { getMenuById, updateMenu } from '../../js/data.js';
import { $ } from '../../js/utils.js';

const params = new URLSearchParams(window.location.search);
const menuId = params.get('id');

const pageTitle = $('#pageTitle');
const editForm = $('#editForm');
const cancelBtn = $('#cancelBtn');

const menu = getMenuById(menuId);

if (!menuId || !menu) {
  alert('잘못된 접근입니다. 메뉴 ID가 필요하거나 존재하지 않는 메뉴입니다.');
  window.location.href = 'list.html';
  throw new Error('Menu ID is missing or menu does not exist.');
}

// Pre-fill form
$('#name').value = menu.name || '';
$('#category').value = menu.category || '';
$('#price').value = menu.price || 0;
$('#image').value = menu.image || '';
$('#description').value = menu.description || '';
if (pageTitle) {
  pageTitle.textContent = `메뉴 수정: ${menu.name}`;
}

if (cancelBtn) {
  cancelBtn.addEventListener('click', () => {
    window.location.href = `detail.html?id=${encodeURIComponent(menuId)}`;
  });
}

if (editForm) {
  editForm.addEventListener('submit', (e) => {
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

    const updatedFields = {
      name,
      category,
      price,
      description,
      image
    };

    updateMenu(menuId, updatedFields);
    alert('메뉴가 성공적으로 수정되었습니다.');
    window.location.href = `detail.html?id=${encodeURIComponent(menuId)}`;
  });
}

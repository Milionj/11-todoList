const form = document.getElementById('form');
// console.log(form);
const todo = document.getElementById('todo');
// console.log(todo);
const listItems = document.querySelector('.list-item');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const todoValue = todo.value.trim();
    if (!todoValue) {
        return;
    }

    const item = `
    <div class="item">
    <p>${todoValue}</p>
    <button class="btn-delete">
    <i class="fas fa-trash-alt"></i>
    </button>
    <button class="btn-archive">
    <i class="fas fa-check-circle"></i>
    </button>
    </div>
    `;

    listItems.insertAdjacentHTML('beforeend', item);
    todo.value = '';
    console.log('bouton cliqué');
    console.log(todoValue);
});

listItems.addEventListener('click', function (e) {
    const deleteBtn = e.target.closest('.btn-delete');
    if (deleteBtn) {
        const itemEl = deleteBtn.closest('.item');
        if (itemEl) {
            itemEl.remove();
        }
        return;
    }

    const archiveBtn = e.target.closest('.btn-archive');
    if (archiveBtn) {
        const itemEl = archiveBtn.closest('.item');
        if (itemEl) {
            itemEl.classList.toggle('done');
        }
    }
});

const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const shoppingList = document.getElementById('shoppingList');
const message = document.getElementById('message');

function showMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
    message.style.display = 'block';
    setTimeout(() => {
        message.textContent = '';
        message.style.display = 'none';
    }, 2000);
}

function addItem() {
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        showMessage('Por favor, digite um item.', 'error');
        return;
    }

    const listItem = document.createElement('li');

    const textNode = document.createTextNode(itemText);

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-btn';
    removeButton.textContent = 'X';

    removeButton.addEventListener('click', () => {
        shoppingList.removeChild(listItem);
        showMessage('O item foi removido da lista.', 'success');
    });

    listItem.appendChild(textNode);
    listItem.appendChild(removeButton);

    shoppingList.appendChild(listItem);

    itemInput.value = '';

    showMessage('O item foi adicionado à lista.', 'success');
}

addButton.addEventListener('click', addItem);
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addItem();
    }
});
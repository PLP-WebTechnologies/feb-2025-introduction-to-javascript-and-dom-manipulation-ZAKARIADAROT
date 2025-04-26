// Selecting elements
const changeTextBtn = document.getElementById('change-text-btn');
const paragraph = document.getElementById('text-paragraph');
const addItemBtn = document.getElementById('add-item-btn');
const removeItemBtn = document.getElementById('remove-item-btn');
const itemList = document.getElementById('item-list');

// Change text content dynamically
changeTextBtn.addEventListener('click', () => {
    paragraph.textContent = "The paragraph text has been updated!";
    paragraph.style.color = "blue"; // Modify CSS style
    paragraph.style.fontWeight = "bold"; // Another style change
});

// Add new list item dynamically
addItemBtn.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
});

// Remove last list item dynamically
removeItemBtn.addEventListener('click', () => {
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild);
    } else {
        alert('No more items to remove!');
    }
});

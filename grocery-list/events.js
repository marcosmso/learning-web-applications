// Grocery List
const groceryForm = document.querySelector('#groceryForm');
const groceryList = document.querySelector('#groceryList');

groceryForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const productInput = groceryForm.elements.product.value;
    const qtyInput = groceryForm.elements.qty.value;
    addGroceryItem(qtyInput, productInput);
});

const addGroceryItem = (product, qty) => {
    const newGroceryItem = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(qty);
    newGroceryItem.append(bTag);
    newGroceryItem.append(` - ${product}`);
    groceryList.append(newGroceryItem);
}

groceryList.addEventListener('click', function(e) {
    e.target.nodeName ==='LI' && e.target.remove();
});

// Enter your name
const input = document.querySelector('#username');
const username = document.querySelector('#typedText');

input.addEventListener('input', function() {
    console.log("changed");
    console.log(input.value);
    username.innerText = input.value;
});
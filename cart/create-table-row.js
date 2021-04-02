//import { cart } from '../data/cart-data.js';
import { thundercat } from '../product.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';
import { getCart } from '../local-storage-utils.js';

const button = document.getElementById('place-order-button');
const table = document.querySelector('.cart-table');
const cart = getCart();

for (let item of cart){
    const matchingThundercat = findById(thundercat, item.id);
    const tr = createTableRow(item, matchingThundercat);
    table.append(tr);
}

const totalRow = createTotalRow(cart, thundercat);
table.append(totalRow);

button.addEventListener('click', () => {
    console.log('button activating');
    //put our cart into a variable
    const cart = getCart();
    //alert the user
    alert(JSON.stringify(cart));
    localStorage.clear();
    window.location = '/';
});
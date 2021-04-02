import { cart } from '../data/cart-data.js';
import { thundercat } from '../product.js';
import { createTableRow, createTotalRow, findById } from '../utils.js';

const table = document.querySelector('.cart-table');

for (let item of cart){
    const matchingThundercat = findById(thundercat, item.id);
    const tr = createTableRow(item, matchingThundercat);
    console.log(item, matchingThundercat);
    table.append(tr);
}

const totalRow = createTotalRow(cart, thundercat);
table.append(totalRow);
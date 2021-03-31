import { cart } from '../data/cart-data.js';
import { thundercat } from '../product.js';
import { createTableRow, findById } from '../utils.js';

const table = document.querySelector('cart-table');

for (let item of cart){
    const matchingThundercat = findById(thundercat, item.id);
    const tr = createTableRow(item, matchingThundercat);
    table.append(tr);
}
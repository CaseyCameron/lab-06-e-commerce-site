import { thundercat } from '../product.js';
import { createThundercat } from '../utils.js';

const ul = document.querySelector('.thundercat-list');

for (let item of thundercat){
    const li = createThundercat(item);
    ul.append(li);
}
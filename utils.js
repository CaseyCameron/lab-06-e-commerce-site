import { addItemToCart, getCart } from './local-storage-utils.js';

// this takes an object in the cart and returns its item.id
export function findById(array, id){
    for (let arrayItem of array){
        if (arrayItem.id === id){
            return arrayItem;
        }
    }
}

export function calcItemTotal(quantity, amount){
    const temp = Math.round(amount * 100) / 100;
    return quantity * temp;
}

export function createTableRow(cartItem, thundercat){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdName.textContent = thundercat.name;
    tdQuantity.textContent = cartItem.quantity;
    const totalPrice = thundercat.cost * cartItem.quantity;
    tdPrice.textContent = totalPrice;
    tr.append(tdName, tdQuantity, tdPrice);
    return tr;
}

export function calcOrderTotal(cartArray, productArray){
    let orderTotal = 0;
    for (let item of cartArray){
        const matchingThundercat = findById(productArray, item.id);
        const sum = calcItemTotal(item.quantity, matchingThundercat.cost);
        orderTotal += sum;
    }
    return orderTotal;
}

export function createTotalRow(cartArray, productArray){
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    td2.textContent = 'Total:';
    td3.textContent = calcOrderTotal(cartArray, productArray);
    tr.append(td1, td2, td3);
    return tr;
}

export function createThundercat(thundercat){
    const li = document.createElement('li');
    li.classList.add('thundercat');
    li.style.background = thundercat.color;

    const pName = document.createElement('p');
    pName.classList.add('name');
    pName.textContent = thundercat.name;

    const image = document.createElement('img');
    image.classList.add('image');
    image.src = thundercat.image;

    const pDescription = document.createElement('p');
    pDescription.classList.add('description');
    pDescription.textContent = thundercat.description;

    const pCategory = document.createElement('p');
    pCategory.classList.add('category');
    pCategory.textContent = thundercat.category;

    const pIsReal = document.createElement('p');
    pIsReal.classList.add('is-real');
    pIsReal.textContent = thundercat.isReal ? 'Is a person' : 'Is not a person';

    const pCost = document.createElement('p');
    pCost.classList.add('cost');
    pCost.textContent = `$${thundercat.cost}`;

    const pQuantity = document.createElement('p');
    pQuantity.classList.add('quantity');

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Add to cart';

    button.addEventListener('click', () => {
        addItemToCart(thundercat.id);
        //update the quantity with each button click in createThundercat
        let displayQuantity = incrementQuantity(thundercat.id);
        pQuantity.textContent = displayQuantity;
    });

    li.append(pName, image, pDescription, pCategory, pIsReal, pCost, pQuantity, button);
    return li;
}

export function incrementQuantity(productID){
    //run it through getCart() to see if something is already there or if empty
    const cart = getCart();

    //match the product with the id in the cart
    const matchingItem = findById(cart, productID);

    //if true (item is in cart) increment the quantity for that item
    if (matchingItem) return matchingItem.quantity++;
}
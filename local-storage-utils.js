import { findById } from './utils.js';

const CART = 'CART';

export function getCart(){
    //stringify the cart
    const stringyCart = localStorage.getItem(CART);
    //parse the cart's value so we can make sense of it ('CART' is the key. If it has a value, parse that value)
    const parsedCart = JSON.parse(stringyCart);

    //if user has anything in CART's value, return it so we can add to it
    if (parsedCart){
        return parsedCart;
    } else {
        return [];
    }
}

//take your parsed cart from getCart() and turn into string
export function setCart(parsedCart){
    //stringify the parsed value
    const stringyCart = JSON.stringify(parsedCart);
    //set that value into CART's value
    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(productID){
    //run it through getCart() to see if something is already there or if empty make a CART key
    const cart = getCart();

    //match the product with the id in the cart
    const matchingItem = findById(cart, productID);

    //if true (item is in cart) increment the quantity for that item
    if (matchingItem){
        matchingItem.quantity++;
    //else, create an item
    } else {
        const item = {
            id: productID,
            quantity: 1
        };
        //push it to the cart
        cart.push(item);
    }
    //save the cart locally with the setCart() function
    setCart(cart);
}
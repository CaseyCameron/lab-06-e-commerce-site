import { findById } from './utils.js';

const CART = 'CART';

export function getCart(){
    //stringify the cart
    const stringyCart = localStorage.getItem(CART);
    //parse the cart so we can make sense of it
    const parsedCart = JSON.parse(stringyCart);

    //if user has anything in cart, return it so we can add to it
    if (parsedCart){
        return parsedCart;
    } else {
        return [];
    }
}

//take your parsed cart from getCart() and turn into string
export function setCart(parsedCart){
    const stringyCart = JSON.stringify(parsedCart);
    localStorage.setItem(CART, stringyCart);
}

export function addItemToCart(productID){
    //run it through getCart() to see if something is already there or if empty
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
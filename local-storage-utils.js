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

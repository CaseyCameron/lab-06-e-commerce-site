// IMPORT MODULES under test here:
import { createThundercat, createTableRow, findById, calcItemTotal, calcOrderTotal } from '../utils.js';
import { cart } from '../data/cart-data.js';
import { thundercat } from '../product.js';
import { getCart, setCart } from '../local-storage-utils.js';

const test = QUnit.test;

test('take in a thundercat object and return an li element', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li class="thundercat" style="background: pink none repeat scroll 0% 0%;"><p class="name">Thundercat</p><img class="image" src="../assets/thundercat.jpg"><p class="description">Phenominal bass player.</p><p class="category">Musician</p><p class="is-real">Is a person</p><p class="cost">$1000000</p><p class=\"quantity\"></p><button class=\"button\">Add to cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = createThundercat({
        id: 5,
        name: 'Thundercat',
        image: '../assets/thundercat.jpg',
        description: 'Phenominal bass player.',
        category: 'Musician',
        isReal: true,
        color: 'pink',
        cost: 1000000,
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('take an array and check to see if the item.id matches', (expect) => {
    const expected = cart[0];

    const actual = findById(cart, cart[0].id);

    expect.deepEqual(actual, expected);
});

test('take a quantity and cost and create a total', (expect) => {
    const expected = 100;

    const actual = calcItemTotal(cart[0].quantity, thundercat[0].cost);

    expect.equal(actual, expected);
});

test('create a tr', (expect) => {
    const expected = '<tr><td>Thundercat</td><td>1</td><td>1000000</td></tr>';

    const actual = createTableRow(cart[4], thundercat[4]);

    expect.equal(actual.outerHTML, expected);
});

test('calculate the order total of the cart', (expect) => {
    const expected = 1000376;

    const actual = calcOrderTotal(cart, thundercat);

    expect.equal(actual, expected);
});

test('get cart, return parsed cart', (expect) => {
    const testCart = [
        {
            id: 1,
            quantity: 2
        },
    ];

    // this puts our cart in local storage
    setCart(testCart);

    const expected = testCart;
    
    // this gets & parses the value in local storage key
    const actual = getCart('CART');

    expect.deepEqual(actual, expected);
});

test('setcart, create a cart key in local storage and compare two things in storage', (expect) => {
    const actual = {
        id: 1,
        quantity: 1
    };

    //stringify a parsed value and add it to CART's value. CART is the key. Actual is the value
    setCart(actual);

    //compare the stringified CART.value in local storage with the actual stringified value
    const expected = JSON.parse(localStorage.getItem('CART'));

    expect.deepEqual(actual, expected);
});

// test('test the clearCart function', (expect) => {
//     const testCart = {
//         id: 1,
//         quantity: 1
//     };

//     setCart(testCart);
//     const actual = getCart('CART');
//     //alert the user
//     const expected = localStorage.clear();
//     console.log(expected);
//     expect.equal(actual, expected);
// });

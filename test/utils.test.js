// IMPORT MODULES under test here:
import { createThundercat, findById, calcItemTotal } from '../utils.js';
import { cart } from '../data/cart-data.js';
import { thundercat } from '../product.js';

const test = QUnit.test;

// test('take in a thundercat object and return an li element', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<li class="thundercat" style="background: lightblue none repeat scroll 0% 0%;"><p class="name">Lion-O</p><img class="image" src="../assets/lion-o.jpg"><p class="description">Intrepid leader and guiding light.</p><p class="category">Leader</p><p class="is-real">Is not a person</p><p class="cost">$50</p><button class="button">Add to cart</button></li><li class="thundercat" style="background: orange none repeat scroll 0% 0%;"><p class="name">Cheetara</p><img class="image" src="../assets/cheetara.jpg"><p class="description">Indomintable and fast.</p><p class="category">Runner</p><p class="is-real">Is not a person</p><p class="cost">$45</p><button class="button">Add to cart</button></li><li class="thundercat" style="background: cornflowerblue none repeat scroll 0% 0%;"><p class="name">Panthero</p><img class="image" src="../assets/panthero.jpg"><p class="description">Resourceful and strong.</p><p class="category">Engineer</p><p class="is-real">Is not a person</p><p class="cost">$42.5</p><button class="button">Add to cart</button></li><li class="thundercat" style="background: red none repeat scroll 0% 0%;"><p class="name">Snarf</p><img class="image" src="../assets/snarf.jpg"><p class="description">Cowardly comedic relief.</p><p class="category">Pet</p><p class="is-real">Is not a person</p><p class="cost">$35</p><button class="button">Add to cart</button></li><li class="thundercat" style="background: pink none repeat scroll 0% 0%;"><p class="name">Thundercat</p><img class="image" src="../assets/thundercat.jpg"><p class="description">Phenominal musician and bass player.</p><p class="category">Musician</p><p class="is-real">Is a person</p><p class="cost">$1000000</p><button class="button">Add to cart</button></li>`;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = createThundercat({
//         id: '5',
//         name: 'Thundercat',
//         image: '../assets/thundercat.jpg',
//         description: 'Phenominal musician and bass player.',
//         category: 'Musician',
//         isReal: true,
//         color: 'pink',
//         cost: 1000000,
//     });

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });

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
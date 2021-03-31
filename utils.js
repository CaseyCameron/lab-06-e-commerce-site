export function findById(array, id){
    for (let arrayItem of array){
        if (arrayItem.id === id) return arrayItem;
    }
}

export function calcItemTotal(quantity, amount){
    
    return Math.round();
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

    const button = document.createElement('button');
    button.classList.add('button');
    button.textContent = 'Add to cart';

    li.append(pName, image, pDescription, pCategory, pIsReal, pCost, button);
    return li;
}


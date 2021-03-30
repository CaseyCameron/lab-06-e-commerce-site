## Plan Data Model
    - Thundercats
    - Color
    - Name
    - Type (cat type)
    - isReal
    - image

## Scope out DOM elements in index.html
    - <ul>
    -<li> with class and style.background color
    -<p> tags with classes for name, type,  isAwesome bool (pVAR.classList.add('class name'))
    - text content: pName.textContent = thundercat.namme, pType.textContent = thundercat.type
    - img & src  const image - document.createElement('img');   img.src = thundercat.image
    - Button
    - li.classList.add('thundercat');
    - li.style.background - digimon.color
    - li.append(pName, pType, pIsReal, image, button; return li;)
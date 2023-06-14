 document.addEventListener('DOMContentLoaded', (event) => {

    const testEle = document.getElementById('test');

    //1. Get the container by ID without queryselector
    const idContainer1 = document.getElementById('container');

    //2. Get the container by ID with queryseletor
    const queryContainer1 = document.querySelector('#container');

    //3. Select all list items with class second
    const allListItemsSec = document.querySelectorAll('li.second');

    //4. Select all list items with class third inside the ol tag
    const allListItemsThi = document.querySelectorAll('ol li.third');

    //5. Give the section with an id of container the text "Hello!"
    idContainer1.textContent = 'Hello';
    //

    //6. Add the class main to the div with a class of footer.
    const footerElement = document.querySelector('.footer');
    footerElement.classList.add('main');

    //7. Remove class main from the div with a class of footer
    footerElement.classList.remove('main');

    //13.
    footerElement.remove();


    //8. Create a new li element.
    const newListEle = document.createElement('li');

    //9. Give li, text "4"
    const newTestList = document.createTextNode('four');
    newListEle.appendChild(newTestList);

    //10. Append that list element to ul
    const allUlEle = document.querySelector('ul');
    allUlEle.appendChild(newListEle);

    //11.
    const allOlEle = document.querySelector('ol');
    const allLiOfOl = allOlEle.getElementsByTagName('li');

    //12.
    for (let i = 0; i < allLiOfOl.length; i++) {
        allLiOfOl[i].style.backgroundColor = 'green';
    }


});


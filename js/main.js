const nav__toggleElem = document.querySelector('.nav__toggle');
const nav__menuElem = document.querySelector('.nav__menu');
const bx_plusElem = document.querySelector('#plus');
const bx_menuElem = document.querySelector('#menu');
const nav__linkElem = document.querySelectorAll('.nav__link');


bx_plusElem.addEventListener('click', () => {

    nav__menuElem.classList.remove('class_toggle');
    bx_plusElem.style.display = 'none';
    bx_menuElem.style.display = 'block';
});

bx_menuElem.addEventListener('click', () => {

    nav__menuElem.classList.add('class_toggle');
    bx_menuElem.style.display = 'none';
    bx_plusElem.style.display = 'block';
});


nav__linkElem.forEach(elem => {
    elem.addEventListener('click', () => {
        nav__menuElem.classList.remove('class_toggle');
        bx_plusElem.style.display = 'none';
        bx_menuElem.style.display = 'block';
    })
});









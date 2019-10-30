const hamburger = document.querySelector('#hamburger');
const firstLine = document.querySelector('.first')
const middleLine = document.querySelector('.middle');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('hamburger-clicked');
    firstLine.classList.toggle('hide-line');
    middleLine.classList.toggle('rotate-line');
    if (navList.style.maxHeight) {
        navList.style.maxHeight = null;
    } else {
        navList.style.maxHeight = navList.scrollHeight + "px";
    } 
});
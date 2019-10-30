const intro = document.querySelector('#intro');
const featuresItem = document.querySelectorAll('.features__item');
const companiesItem = document.querySelectorAll('.companies__logo');
const toolsItem = document.querySelectorAll('.tools__card');
const text = document.querySelectorAll('.footer-nav__item');

window.addEventListener('load', ()=> {
    fadeIn(intro);
});

function fadeIn(section) {
    if (window.pageYOffset >= section.offsetTop - 350) {
        section.style.transform = 'translate(0px, 0px)';
        section.style.opacity = '1';
    }
}

window.addEventListener('scroll', ()=> {

    for (let i = 0; i < featuresItem.length; i++) {
        fadeIn(featuresItem[i]);
    }

    for (let i = 0; i < companiesItem.length; i++) {
        setTimeout(() => {
            fadeIn(companiesItem[i]);
        }, 100);
    }

    for (let i = 0; i < toolsItem.length; i++) {
        fadeIn(toolsItem[i]);
    }
});
for (i = 0; i < text.length; i++) {
    // text[i].style.display = 'inline';
    // let textWidth = text[i].getBoundingClientRect().width;
    // text[i].style.width = textWidth + 'px';
    // text[i].style.backgroundImage = 'linear-gradient(120deg, #8fd0cc 0%, #8fd0cc 100%)';
    // text[i].style.backgroundRepeat = 'no-repeat';
    // text[i].style.backgroundSize = '100% 0.5em';
    // text[i].style.backgroundPosition = '0 88%';
    // text[i].style.display = 'block';

    // text[i].addEventListener('mouseover', () => {
    //     text[i].style.backgroundSize = '100% 88%';
    // });

    // text[i].addEventListener('mouseout', () => {
    //     text[i].style.backgroundSize = '100% 0.5em';
    // });
}

// console.log(text[1].getBoundingClientRect().width);



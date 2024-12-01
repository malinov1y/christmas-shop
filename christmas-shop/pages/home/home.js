//burger-menu
const body = document.body;
const burgerButton = document.querySelector('.header-burger');
const headerContainer = document.querySelector('.header-container');
const burgerMenu = document.querySelector('.header-menu');
const menuLinks = document.querySelectorAll('.header-menu__a');


burgerButton.addEventListener('click', function() {
    headerContainer.classList.toggle('open');
    if (headerContainer.classList.contains('open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        // отменяем обычный переход по ссылке и закрываем меню
        event.preventDefault();

        headerContainer.classList.remove('open');
        body.style.overflow = '';

        setTimeout(() => {
            // переходим по ссылке с задержкой
            window.location.href = link.href;
        }, 600);
    });
});


//slider
const sliderContainer = document.querySelector('.slider-items');
const leftButton = document.querySelector('.slider-button__left');
const rightButton = document.querySelector('.slider-button__right');

let currentPosition = 0;

function getClickDistance() {
    const screenWidth = window.innerWidth;
    let clickCount;
    if (screenWidth >= 769) {
        clickCount = 3;
    } else if (screenWidth >= 380) {
        clickCount = 6;
    } else {
        clickCount = 6;
    }

    const sliderWidth = sliderContainer.scrollWidth;
    const visibleWidth = sliderContainer.offsetWidth;
    return (sliderWidth - visibleWidth) / clickCount;
}

function updateSliderPosition() {
    sliderContainer.style.transform = `translateX(-${currentPosition}px)`;

    leftButton.disabled = currentPosition <= 0;
    rightButton.disabled = currentPosition >= sliderContainer.scrollWidth - sliderContainer.offsetWidth;
}

rightButton.addEventListener('click', function() {
    const clickDistance = getClickDistance();
    currentPosition += clickDistance;
    if (currentPosition > sliderContainer.scrollWidth - sliderContainer.offsetWidth) {
        currentPosition = sliderContainer.scrollWidth - sliderContainer.offsetWidth;
    }
    updateSliderPosition();
});

leftButton.addEventListener('click', function() {
    const clickDistance = getClickDistance();
    currentPosition -= clickDistance;
    if (currentPosition < 0) {
        currentPosition = 0;
    }
    updateSliderPosition();
});

updateSliderPosition();
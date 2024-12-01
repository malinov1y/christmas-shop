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
        // сначала отменяем обычный переход по ссылке и закрываем меню
        event.preventDefault();

        headerContainer.classList.remove('open');
        body.style.overflow = '';

        setTimeout(() => {
            // переходим по ссылке с задержкой
            window.location.href = link.href;
        }, 600);
    });
});
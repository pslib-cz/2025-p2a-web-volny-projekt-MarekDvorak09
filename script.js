const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

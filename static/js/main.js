const mobileMenu = document.getElementById('hamburger'),
nav = document.querySelector('nav'),
mobileCloseNav = document.getElementById('close-mobile-nav'),
hero = document.getElementById('hero');

mobileMenu.addEventListener('click', () => {
    nav.classList.add('display-block');
    hero.classList.add('opacity-30');
})
mobileCloseNav.addEventListener('click', () => {
    nav.classList.remove('display-block');
    hero.classList.remove('opacity-30');
});
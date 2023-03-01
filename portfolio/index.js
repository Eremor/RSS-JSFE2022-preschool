const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');

const openMenu = () => {
  burger.classList.toggle('hamburger--open');
  navigation.classList.toggle('nav--open');
}

burger.addEventListener('click', () => openMenu());
navigation.addEventListener('click', (e) => {
  if(e.target.classList == 'nav__link') {
    openMenu();
  }
});
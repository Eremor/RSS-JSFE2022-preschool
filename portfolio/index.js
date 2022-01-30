const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const seasons = document.querySelector('.seasons');
const portfolioButtons = seasons.querySelectorAll('.seasons__btn');
const portfolioImages = document.querySelectorAll('.portfolio__item');

const openMenu = () => {
  burger.classList.toggle('hamburger--open');
  navigation.classList.toggle('nav--open');
}

const changeActiveSeason = (event) => {
  if(!event.target.classList.contains('btn--primary')){
    portfolioButtons.forEach(button => button.classList.remove('btn--primary'));
    event.target.classList.add('btn--primary');
  }
}

const changeImage = (event) => {
  if(event.target.classList.contains('seasons__btn')) {
    const season = event.target.dataset.season;
    changeActiveSeason(event);

    portfolioImages.forEach((image, index) => image.src = `assets/img/${season}/${index + 1}.jpg`);
  }
}

burger.addEventListener('click', () => openMenu());
navigation.addEventListener('click', (e) => {
  if(e.target.classList == 'nav__link') {
    openMenu();
  }
});
seasons.addEventListener('click', (e) => changeImage(e))
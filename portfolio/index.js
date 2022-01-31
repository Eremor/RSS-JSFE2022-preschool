const burger = document.querySelector('.hamburger');
const navigation = document.querySelector('.nav');
const themeBtn = document.querySelector('.theme-btn');
const seasons = document.querySelector('.seasons');
const portfolioButtons = seasons.querySelectorAll('.seasons__btn');
const portfolioImages = document.querySelectorAll('.portfolio__item');

let theme = false;

const openMenu = () => {
  burger.classList.toggle('hamburger--open');
  navigation.classList.toggle('nav--open');
}

const changeTheme = (theme) => {
  const changeThemeBlocks = ['.skills', '.portfolio', '.video', '.price'];
  const changeThemeText = ['.skills__title', '.skills__text', '.card__title', '.card__description'];
  const changeThemeTitle = ['.section-title--primary', '.title-wrapper'];
  
  if(theme) {
    changeThemeBlocks.forEach(el => { 
      const item = document.querySelector(el);
      item.classList.add('light-theme')
    })
  
    changeThemeText.forEach(el => {
      const items = document.querySelectorAll(el);
      items.forEach(item => item.classList.add('light-theme--text'))
    })
  
    portfolioButtons.forEach(btn => btn.classList.add('light-theme--btn'));
  
    changeThemeTitle.forEach(el => {
      const items = document.querySelectorAll(el);
      items.forEach(item => {
        if(item.classList.contains('title-wrapper')) {
          item.classList.add('light-theme--line')
        } else {
          item.classList.add('light-theme');
          item.classList.add('light-theme--text');
        }
      })
    })

    themeBtn.classList.add('theme-btn--light')
  } else {
    changeThemeBlocks.forEach(el => { 
      const item = document.querySelector(el);
      item.classList.remove('light-theme')
    })
  
    changeThemeText.forEach(el => {
      const items = document.querySelectorAll(el);
      items.forEach(item => item.classList.remove('light-theme--text'))
    })
  
    portfolioButtons.forEach(btn => btn.classList.remove('light-theme--btn'));
  
    changeThemeTitle.forEach(el => {
      const items = document.querySelectorAll(el);
      items.forEach(item => {
        if(item.classList.contains('title-wrapper')) {
          item.classList.remove('light-theme--line')
        } else {
          item.classList.remove('light-theme');
          item.classList.remove('light-theme--text');
        }
      })
    })

    themeBtn.classList.remove('theme-btn--light')
  }
}

const onChangeTheme = () => {
  theme = !theme;
  changeTheme(theme);
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

const setLocalStorage = () => {
  localStorage.setItem('theme', theme);
}

const getLocalStorage = () => {
  if(localStorage.getItem('theme')) {
    const getTheme = localStorage.getItem('theme');
    theme = (getTheme == 'true');

    changeTheme(theme);
  }
}

burger.addEventListener('click', () => openMenu());
navigation.addEventListener('click', (e) => {
  if(e.target.classList == 'nav__link') {
    openMenu();
  }
});
themeBtn.addEventListener('click', onChangeTheme)
seasons.addEventListener('click', (e) => changeImage(e))

window.addEventListener('beforeunload', setLocalStorage)
window.addEventListener('load', getLocalStorage)
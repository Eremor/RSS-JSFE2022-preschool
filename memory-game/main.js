import { startGame } from './src/utils/game.js';

const mainScreen = document.querySelector('.initial');
const startButton = mainScreen.querySelector('.initial__btn--start');
const gameScreen = document.querySelector('.game');
const gameField = gameScreen.querySelector('.game__field');

const start = async () => {
  mainScreen.classList.add('visually-hidden');
  gameScreen.classList.remove('visually-hidden');
  
  await startGame();
  gameField.scrollIntoView(false);
}

startButton.addEventListener('click', start);
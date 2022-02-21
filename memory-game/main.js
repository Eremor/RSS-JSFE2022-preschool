import { BestScore } from './src/components/popup/best-score/best-score.js';
import { FinishPopup } from './src/components/popup/finish-popup/finish-popup.js';
import { startGame } from './src/utils/game.js';
import { getLocalStorage } from './src/utils/storage.js';

const mainScreen = document.querySelector('.initial');
const startButton = mainScreen.querySelector('.initial__btn--start');
const bestScoreButton = document.querySelector('.header__btn');
const gameScreen = document.querySelector('.game');
const gameField = gameScreen.querySelector('.game__field');

const start = async () => {
  mainScreen.classList.add('visually-hidden');
  gameScreen.classList.remove('visually-hidden');
  
  await startGame();
  gameField.scrollIntoView(false);
}

const showBestScorePopup = () => {
  const scoreList = getLocalStorage();
  const bestScorePopup = new BestScore(scoreList);
  bestScorePopup.create();
  document.body.append(bestScorePopup.node);
}

startButton.addEventListener('click', start);
bestScoreButton.addEventListener('click', showBestScorePopup);
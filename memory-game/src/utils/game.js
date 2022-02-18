import { Card } from '../components/card/card.js';
import { addCards, cleanCardField } from './card-field.js'
import { FLIP_DELAY, TOTAL_CARDS } from './constants.js';
import { handlerCount } from './counter.js';
import { delay } from './delay.js';

let isAnimation = false;
let activeCard = undefined;
let stepToFinish = TOTAL_CARDS;
let stepCount = 0;

export const startGame = async () => {
  const res = await fetch('./src/assets/images.json');
  const data = await res.json();
  const images = data.images;
  
  newGame(images);
}

const newGame = (images) => {
  cleanCardField();

  let totalImage = images.slice(0, TOTAL_CARDS);
  const cards = totalImage
    .concat(totalImage)
    .map((cardUrl) => new Card(cardUrl))
    .sort(() => Math.random() - 0.5);

  cards.forEach(card => card.node.addEventListener('click', () => handlerCard(card)));

  addCards(cards);
}

const endGame = () => {

}

const handlerCard = async (card) => {
  if(isAnimation) return;
  if(!card.isFlipped) return;

  await card.flipToFront();

  if(!activeCard) {
    activeCard = card;
    isAnimation = false;
    return;
  }

  if(activeCard.image !== card.image) {
    missMatchCard(activeCard, card)
  } else {
    matchCard(activeCard, card);
  }

  stepCount++;
  handlerCount(stepCount);

  if(stepToFinish === 0) endGame();

  activeCard = undefined;
  isAnimation = false;
}

const matchCard = async (activeCard, card) => {
  activeCard.cardFront.style.backgroundColor = 'rgba(10, 207, 131, 0.5)';
  card.cardFront.style.backgroundColor = 'rgba(10, 207, 131, 0.5)';

  stepToFinish--;
}

const missMatchCard = async (activeCard, card) => {
  activeCard.cardFront.style.backgroundColor = 'rgba(242, 78, 30, 0.5)';
  card.cardFront.style.backgroundColor = 'rgba(242, 78, 30, 0.5)';

  await delay(FLIP_DELAY);
  await Promise.all([activeCard.flipToBack(), card.flipToBack()]);

  activeCard.cardFront.style.backgroundColor = 'transparent';
  card.cardFront.style.backgroundColor = 'transparent';
}
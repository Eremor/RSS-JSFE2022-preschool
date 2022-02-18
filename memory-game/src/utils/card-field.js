import { SHOW_TIME } from './constants.js';

const cardField = document.querySelector('.game__field');

export const cleanCardField = () => {
  cardField.innerHTML = '';
}

export const addCards = (cardsArr) => {
  cardsArr.forEach(card => {
    card.create();
    cardField.append(card.node)
  });

  setTimeout(() => {
    cardsArr.forEach(card => card.flipToBack())
  }, SHOW_TIME * 1000)
}

export const getRandomCard = (cardsArr) => {

}
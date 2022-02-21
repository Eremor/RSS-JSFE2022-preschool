import { Popup } from '../popup.js';

export class BestScore extends Popup {
  constructor(scoreList) {
    super();
    this.scoreList = scoreList;
  }

  create = () => {
    const body = document.createElement('div');
    body.classList.add('popup__body');

    const title = document.createElement('h2');
    title.classList.add('popup__title');
    title.textContent = 'Best score';

    const list = document.createElement('ul');
    list.classList.add('popup__List', 'score');

    this.scoreList.forEach((item, index) => {
      const el = createScoreItem(index, item[0], item[1]);
      list.append(el);
    });

    const close = document.createElement('button');
    close.classList.add('popup__btn', 'btn');

    body.append(title, list, close);

    this.node.append(body);
    close.addEventListener('click', () => {
      this.node.remove();
      document.body.classList.remove('disable-scroll');
    });
  }
}

const createScoreItem = (index, userName, userScore) => {
  const item = document.createElement('li');
  item.classList.add('score__item');

  const number = document.createElement('strong');
  number.classList.add('score__number');
  number.textContent = index + 1;

  const name = document.createElement('p');
  name.classList.add('score__name');
  name.textContent = userName;

  const score = document.createElement('p');
  score.classList.add('score__count');
  score.textContent = userScore;

  item.append(number, name, score)

  return item;
}
import { getStepCount } from '../../../utils/game.js';
import { Form } from '../../form/form.js';
import { Popup } from '../popup.js';
import { getLocalStorage, saveUserScore } from '../../../utils/storage.js';
import { BestScore } from '../best-score/best-score.js';

export class FinishPopup extends Popup {
  constructor() {
    super();

    const body = document.createElement('div');
    body.classList.add('popup__body');

    const title = document.createElement('h2');
    title.classList.add('popup__title');
    title.textContent = 'You win!';

    const statistic = document.createElement('p');
    statistic.classList.add('popup__stat');
    statistic.textContent = `You made ${getStepCount()} moves`;

    const form = new Form();
    form.create();

    const input = form.nameField;
    const button = form.button;

    body.append(title, statistic, form.node);

    this.node.append(body);

    input.addEventListener('input', (e) => validateName(e, button));
    button.addEventListener('click', () => addDataToScore(input, getStepCount(), this.node));
  }
}

const validateName = (e, button) => {
  const target = e.target;
  if(target.value.length > 0) {
    button.classList.remove('popup__submit--disable');
    button.disabled = false;
  } else {
    button.classList.add('popup__submit--disable');
    button.disabled = true;
  }
}

const addDataToScore = (nameField, score, popup) => {
  const name = nameField.value;
  saveUserScore(name, score);
  nameField.value = '';
  popup.remove();
  const bestScorePopup = new BestScore(getLocalStorage());
  bestScorePopup.create();
  document.body.append(bestScorePopup.node);
}
import { BaseComponent } from './../base-component.js';

export class Card extends BaseComponent {
  isFlipped = false;
  card = document.createElement('div');
  cardFront = document.createElement('div');

  constructor(image) {
    super('div', ['card-container']);
    this.image = image;
  }

  create = () => {
    this.card.classList.add('card');

    this.cardFront.classList.add('card__front');
    this.cardFront.style.backgroundImage = `url(./src/assets/img/${this.image})`

    const cardBack = document.createElement('div');
    cardBack.classList.add('card__back');

    this.card.append(this.cardFront, cardBack);

    this.node.append(this.card);
  }

  flipToBack = () => {
    this.isFlipped = true;
    return this.flip()
  }

  flipToFront = () => {
    this.isFlipped = false;
    return this.flip(true);
  }

  flip = (isBack = false) => {
    return new Promise((res, rej) => {
      this.card.classList.toggle('flipped', !isBack);
      this.card.addEventListener('transitionend', () => res(), {
        once: true,
      })
    })
  }
}
import { BaseComponent } from '../../base-component.js';

export class CardDate extends BaseComponent {
  constructor(content) {
    super('p', ['card__date'], content);
  }
}
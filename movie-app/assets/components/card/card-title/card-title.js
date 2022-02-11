import { BaseComponent } from '../../base-component.js';

export class CardTitle extends BaseComponent {
  constructor(content) {
    super('h3', ['card__title'], content);
  }
}
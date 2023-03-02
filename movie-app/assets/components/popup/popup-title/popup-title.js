import { BaseComponent } from '../../base-component.js';

export class PopupTitle extends BaseComponent {
  constructor(content) {
    super('h3', ['popup__title'], content);
  }
}
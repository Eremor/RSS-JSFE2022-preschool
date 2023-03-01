import { BaseComponent } from '../base-component.js';

export class Popup extends BaseComponent {
  constructor() {
    super('div', ['popup']);

    const overlate = document.createElement('div');
    overlate.classList.add('popup__overlate');

    this.node.append(overlate);

    document.body.classList.add('disable-scroll');

    overlate.addEventListener('click', () => {
      this.node.remove()
      document.body.classList.remove('disable-scroll');
    });
  }
}
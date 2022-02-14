import { BaseComponent } from '../../base-component.js';

export class PopupSubtitle extends BaseComponent {
  span = document.createElement('span');
  
  constructor(subtitleContent, contentClass, contentText) {
    super('h4', ['popup__subtitle'], subtitleContent);

    this.contentClass = contentClass;
    this.contentText = contentText;
  }

  create = () => {
    this.span.classList.add(this.contentClass);
    this.span.textContent = this.contentText;

    this.node.append(this.span);
  }
}
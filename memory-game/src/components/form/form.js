import { BaseComponent } from '../base-component.js';

export class Form extends BaseComponent {
  nameField = document.createElement('input');
  button = document.createElement('button');

  constructor() {
    super('form', ['popup__form']);
  }

  create = () => {
    this.nameField.type = 'text';
    this.nameField.placeholder = 'Please write your name...';
    this.nameField.classList.add('popup__name');
    this.nameField.focus();
    
    this.button.type = 'submit';
    this.button.textContent = 'Ok';
    this.button.classList.add('popup__submit', 'btn', 'popup__submit--disable');
    this.button.disabled = true;

    this.node.append(this.nameField, this.button);

    this.node.addEventListener('submit', (e) => e.preventDefault());
  }
}
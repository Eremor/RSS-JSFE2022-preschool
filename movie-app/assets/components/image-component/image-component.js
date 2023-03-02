import { BaseComponent } from '../base-component.js';

export class ImageComponent extends BaseComponent {
  constructor(classes, src, alt) {
    super('img', [...classes]);
    this.node.src = src;
    this.node.alt = alt;
  }
}
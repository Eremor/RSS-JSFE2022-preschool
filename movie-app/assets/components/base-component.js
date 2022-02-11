export class BaseComponent {
  node;
  
  constructor(tag, classes = [], content = '') {
    this.node = document.createElement(tag);
    this.node.classList.add(...classes);
    this.node.textContent = content;
  }

  destroy = () => {
    this.node.remove();
  }

  addChildren = (children)  => {
    children.forEach(child => this.node.append(child));
  }
}
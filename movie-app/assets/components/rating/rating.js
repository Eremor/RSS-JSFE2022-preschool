import { BaseComponent } from "../base-component.js";

export class Rating extends BaseComponent {
  constructor(rate) {
    super('div', ['rating', 'card__rating']);
    this.rate = rate * 10;

    this.create();
  }

  create = () => {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('rating__progress');

    const circleBase = this.createCircle('#133755');
    circleBase.classList.add('rating__progress--base');
    
    const circleRating = this.createCircle('#1abc9c');
    circleRating.classList.add('rating__progress--circle');

    const ratingNumber = document.createElement('span');
    ratingNumber.classList.add('rating__number');
    ratingNumber.textContent = `${Math.round(this.rate)}%`;

    this.handlerRatingCircle(this.rate, circleRating);
    
    svg.append(circleBase, circleRating);

    this.addChildren([svg, ratingNumber]);
  }

  createCircle = (stroke) => {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttributeNS(null, 'stroke', stroke);
    circle.setAttributeNS(null, 'stroke-width', 3);
    circle.setAttributeNS(null, 'fill', 'transparent');
    circle.setAttributeNS(null, 'r', 19);
    circle.setAttributeNS(null, 'cx', 25);
    circle.setAttributeNS(null, 'cy', 25);

    return circle;
  }

  handlerRatingCircle = (rate, circle) => {
    const radiusCircle = 19;
    const circumference = radiusCircle * 2 * Math.PI;
    const offset = circumference - rate / 100 * circumference;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = offset;

    if(rate > 69) {
      circle.classList.add('rating__progress--high');
    } else if(rate > 39){
      circle.classList.add('rating__progress--medium');
    } else if(rate > 0){
      circle.classList.add('rating__progress--low');
    } else {
      new Error('users have not rated the product yet');
    }
  }
}
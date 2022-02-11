import { BaseComponent } from '../base-component.js';
import { ImageComponent } from '../image-component/image-component.js';
import { Rating } from '../rating/rating.js';
import { CardDate } from './card-date/card-date.js';
import { CardTitle } from './card-title/card-title.js';

export class Card extends BaseComponent {
  constructor({itemName, releaseDate, posterPath, voteAverage}) {
    super('div', ['card']);

    this.itemName = itemName;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
    this.voteAverage = voteAverage;
  }

  create = () => {
    const url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    const posterUrl = `${url}${this.posterPath}`;
    const img = new ImageComponent(['card__img'], posterUrl, 'poster');

    const rating = new Rating(this.voteAverage);

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__content');

    const cardTitle = new CardTitle(this.itemName);
    const release = this.transformDate(this.releaseDate);
    const cardDate = new CardDate(release);

    cardContainer.append(cardTitle.node, cardDate.node);

    this.addChildren([img.node, rating.node, cardContainer]);
  };

  transformDate = (date) => {
    const dateArr = date.split('-').reverse();
    const day = dateArr[0];
    const year = dateArr[2];
    let month = '';

    switch(dateArr[1]) {
      case '01':
        month = 'Jan';
        break;
      case '02':
        month = 'Feb';
        break;
      case '03':
        month = 'Mar';
        break;
      case '04':
        month = 'Apr';
        break;
      case '05':
        month = 'May';
        break;
      case '06':
        month = 'Jun';
        break;
      case '07':
        month = 'Jul';
        break;
      case '08':
        month = 'Aug';
        break;
      case '09':
        month = 'Sep';
        break;
      case '10':
        month = 'Oct';
        break;
      case '11':
        month = 'Nov';
        break;
      case '12':
        month = 'Des';
        break;
      default:
        console.error('Wrong date');
        break;
    }

    return `${month} ${day}, ${year}`;
  }
}
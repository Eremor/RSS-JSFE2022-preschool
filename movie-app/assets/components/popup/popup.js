import { BaseComponent } from '../base-component.js';
import { ImageComponent } from '../image-component/image-component.js';
import { PopupSubtitle } from './popup-subtitle/popup-subtitle.js';
import { PopupTitle } from './popup-title/popup-title.js';

export class Popup extends BaseComponent {
  constructor(itemName, releaseDate, posterPath, voteAverage, overview) {
    super('div', ['popup']);

    this.itemName = itemName;
    this.releaseDate = releaseDate;
    this.posterPath = posterPath;
    this.voteAverage = voteAverage;
    this.overview = overview;
  }

  create = () => {
    const url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    const posterUrl = `${url}${this.posterPath}`;

    const overlate = document.createElement('div');
    overlate.classList.add('popup__overlate');

    const popupBody = document.createElement('div');
    popupBody.classList.add('popup__body');

    const poster = new ImageComponent(['popup__img'], posterUrl, 'poster');

    const popupContent = document.createElement('div');
    popupContent.classList.add('popup__content');

    const title = new PopupTitle(this.itemName);

    const release = new PopupSubtitle('Release date: ', 'popup__subtitle--date', this.transformDate(this.releaseDate));
    release.create();
    const rating = new PopupSubtitle('Rating: ', 'popup__subtitle--rating', this.voteAverage);
    rating.create();
    this.handlerRating(this.voteAverage * 10, rating.span);

    const overviewTitle = document.createElement('h4');
    overviewTitle.classList.add('popup__subtitle');
    overviewTitle.textContent = 'Overview:';

    const overviewText = document.createElement('p');
    overviewText.classList.add('popup__description');
    overviewText.textContent = this.overview;

    const button = document.createElement('button');
    button.classList.add('popup__btn', 'btn');

    popupContent.append(
      title.node,
      release.node,
      rating.node,
      overviewTitle,
      overviewText,
      button
    );
    popupBody.append(poster.node, popupContent);
    this.addChildren([overlate, popupBody]);

    button.addEventListener('click', this.removePopup);
    overlate.addEventListener('click', this.removePopup);

    document.body.append(this.node);
    this.disableScroll();
  }

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

    return `${day} ${month} ${year}`;
  }

  handlerRating = (rate, element) => {
    if(rate > 69) {
      element.classList.add('high');
    } else if(rate > 39){
      element.classList.add('medium');
    } else if(rate > 0){
      element.classList.add('low');
    } else {
      new Error('users have not rated the product yet');
    }
  }

  removePopup = () => {
    this.destroy();
    this.enableScroll();
  }

  disableScroll = () => {
    document.body.classList.add('disable-scroll');
  }

  enableScroll = () => {
    document.body.classList.remove('disable-scroll');
  }
}
import {getPopular, getQuery} from './services/api.js';
import {Card} from './components/card/card.js';

const form = document.querySelector('.search');
const searchInput = form.querySelector('.search__query');
const popularContainer = document.querySelector('.popular__list');
const popularButtons = popularContainer.querySelectorAll('.popular__item');
const cardField = document.querySelector('.card-field');

const searchQuery = async (e) => {
  e.preventDefault();
  const query = searchInput.value;

  if(query != '') {
    const data = await getQuery(query);

    addCards(data);
  }
}

const changePopularCategory = async (e) => {
  const target = e.target;
  if(target.classList.contains('popular__item')) {
    popularButtons.forEach((btn) => btn.classList.remove('popular__item--active'));

    if(!target.classList.contains('popular__item--active')) {
      target.classList.add('popular__item--active')
      const category = target.dataset.category;
      const data = await getPopular(category);

      addCards(data);
    }
  }
}

const addCards = (cards) => {
  cardField.innerHTML = '';

  cards.forEach(card => {
    const itemName = card.name || card.title;
    const releaseDate = card.release_date || card.first_air_date;
    const posterPath = card.poster_path;
    const voteAverage = card.vote_average;

    const cardElement = new Card({itemName, releaseDate, posterPath, voteAverage});
    cardElement.create()
    cardField.append(cardElement.node);
  });
}

const baseLoading = async () => {
  const data = await getPopular('movie');

  addCards(data);
}

baseLoading();

form.addEventListener('submit', searchQuery);
popularContainer.addEventListener('click', changePopularCategory);
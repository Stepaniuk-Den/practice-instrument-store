import { instruments } from '../data/product';
import { createPlpMarkup } from './templates/productTemplate';
import { addToFavorite, addToBasket } from './helpers/helperClickCard';

const elements = {
  cardslist: document.querySelector('.js-product-list'),
};

const classes = {
  favorite: 'js-add-favorite',
  basket: 'js-add-basket',
};

elements.cardslist.addEventListener('click', handlerClickAdd);
elements.cardslist.insertAdjacentHTML(
  'beforeend',
  createPlpMarkup(instruments)
);

function handlerClickAdd(evt) {
  if (evt.target.classList.contains(classes.favorite)) {
    addToFavorite(evt.target);
  }
  if (evt.target.classList.contains(classes.basket)) {
    addToBasket(evt.target);
  }
}

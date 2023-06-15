import { instruments } from '../../data/product';
import { common } from '../common/common';

const classes = {
  card: 'js-card-item',
};

function addToFavorite(htmlEl) {
  const id = _findIdProduct(htmlEl);
  const product = _findProduct(id, instruments);
  const products = getFromLS(common.KEY_LS_FAVORITE) || [];
  products.push(product);
  _addToLS(common.KEY_LS_FAVORITE, products);
  // console.log(product);
}

function addToBasket(htmlEl) {
  const id = _findIdProduct(htmlEl);
  const product = _findProduct(id, instruments);
  _addToLS(common.KEY_LS_BASKET, product);
  // console.log(product);
}
/// _ private function only this file
function _findIdProduct(htmlEl) {
  return htmlEl.closest(`.${classes.card}`).dataset.id;
}

function _findProduct(productId, arr) {
  return arr.find(({ id }) => id === Number(productId));
}

function _addToLS(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getFromLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

export { addToFavorite, addToBasket, getFromLS };

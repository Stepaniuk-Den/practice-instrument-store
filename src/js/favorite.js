import { createPlpMarkup } from './templates/productTemplate';
import { getFromLS } from './helpers/helperClickCard';
import { common } from './common/common';

const elements = {
  favorite: document.querySelector('.js-favorite-list'),
};

elements.favorite.insertAdjacentHTML(
  'beforeend',
  createPlpMarkup(getFromLS(common.KEY_LS_FAVORITE) || [])
);

function createPlpMarkup(arr) {
  return arr
    .map(
      ({ id, price, img, description, name }) =>
        `<li class="js-card-item" data-id="${id}">
    <img src="${img}" alt="${name}" width="300"/>
    <h3>${name}</h3>
    <p>${price}</p>
    <p>${description}</p>
    <button class="js-add-favorite" type="button">Add to Favorite</button>
    <button class="js-add-basket" type="button">Add to Basket</button>
  </li>`
    )
    .join('');
}

export { createPlpMarkup };

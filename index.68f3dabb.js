var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var a=n("icsMS"),s=n("lSCbS"),i=n("9QbLn");const d={cardslist:document.querySelector(".js-product-list")},o="js-add-favorite",l="js-add-basket";d.cardslist.addEventListener("click",(function(e){e.target.classList.contains(o)&&(0,i.addToFavorite)(e.target);e.target.classList.contains(l)&&(0,i.addToBasket)(e.target)})),d.cardslist.insertAdjacentHTML("beforeend",(0,s.createPlpMarkup)(a.instruments));
//# sourceMappingURL=index.68f3dabb.js.map
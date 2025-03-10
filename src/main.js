import { showImg } from './js/pixabay-api.js';
import { clearGallery, hideLoadMoreButton } from './js/render-functions.js';

export let value = '';

const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', event => {
  event.preventDefault();
  value = input.value.trim();

  if (!value) {
    hideLoadMoreButton();
    clearGallery();
    return;
  }
  input.value = '';
  showImg(value);
});

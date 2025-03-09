import { showImg } from './js/pixabay-api.js';
import { clearGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('.input');

form.addEventListener('submit', event => {
  event.preventDefault();
  const value = input.value.trim();

  if (!value) {
    clearGallery();
    return;
  } else {
    showImg(value);
  }
});

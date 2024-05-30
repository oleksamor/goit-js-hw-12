
import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { objectSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { showLoading } from './js/render-functions';
import { hideLoading } from './js/render-functions';

const form = document.querySelector(".forma");
const loader = document.querySelector('.css-loader');
const gallery = document.querySelector('.gallery');
const loadBtn = document.querySelector('.load-more-btn');


form.addEventListener("submit", handleSubmit);

let page = 1;

hideLoading(loader);

async function handleSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  console.log(event.target.elements);

  const {search__images} = event.target.elements;

  console.log(search__images.value); 
  
  sessionStorage.setItem('text', (search__images.value.trim()));
 
  if ((search__images.value) === '') {
    form.reset();
    loadBtn.classList.replace('load-more', 'btn-hidden');
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'red',
      progressBarColor: 'black',
    });
    return;
  }

  showLoading(loader);

  try {
    const data = await objectSearch((search__images.value), page);

    console.log(data);
    
    if (data.hits.length === 0) {
      form.reset();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
       position: 'bottomRight',

        messageColor: 'white',
        backgroundColor: 'red',
        progressBarColor: 'black',
      });
      return;
    }

    form.reset();
    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();

    const totalPages = Math.ceil(data.totalHits / 15);

     if (page < totalPages) {
      loadBtn.classList.replace('btn-hidden', 'load-more');
    }
    else
     {
       alert("We're sorry, but you've reached the end of search results."); return;
     }
  } catch (error) {
    form.reset();
    iziToast.error({
      message:
        'Sorry, there was an error while searching for images. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'red',
      progressBarColor: 'black',
    });
  } finally {
    hideLoading(loader);
  }
}

loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  loadBtn.disabled = true;
 page += 1;
  try {
    const text = sessionStorage.getItem('text');

   
    const data = await objectSearch(text, page);

    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    loadBtn.disabled = false;
const item = document.querySelector('.gallery-item');
 const itemHeight = item.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    alert(error.message);
  }

    if (data.hits.length < 15) {
      loadBtn.classList.add('btn-hidden');
    }

    lightbox.refresh();

}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});
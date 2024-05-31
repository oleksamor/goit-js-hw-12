
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
loadBtn.addEventListener('click', loadMore);

let page = 1;
let textInput = '';

hideLoading(loader);
// showLoading(loader);

async function handleSubmit(event) {
page = 1;
  
  event.preventDefault();
  gallery.innerHTML = '';
  const {search__images} = event.target.elements;

  textInput = search__images.value.trim();
  
  
  if ((textInput) === '') {
    form.reset();
    loadBtn.classList.replace('load-more', 'btn-hidden');
    iziToast.error({
      message:
        'Sorry, field must not be empty. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'red',
      progressBarColor: 'black',
    });
    return;
  }

  showLoading(loader);

  try {
    const data = await objectSearch((textInput), page);

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
       alert("We're sorry, but you've reached the end of search results.");
       return;
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


async function loadMore() {
  page += 1;
 
  try {
    const data = await objectSearch(textInput, page);

       gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));
    lightbox.refresh();

     const totalPages = Math.ceil(data.totalHits / 15);

     if (page >= totalPages) {
      loadBtn.classList.replace('load-more', 'btn-hidden');
         alert("We're sorry, but you've reached the end of search results");
     } 

 
   
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
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});
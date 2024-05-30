import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let lightbox;

export function createMarkup(arr) {
  return arr
    .map(
      ({
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        largeImageURL,
      }) => `
        <li class="gallery-item">
                <a class="gallery-link" href="${largeImageURL}" >
                   <img
                     class = "gallery-image"
                     src = "${webformatURL}"
                     alt = "${tags}"
                     />
                 
                 <div class = "container">
                      <ul class ="wrapper-info ">
                            <li class = "likes">
                            <p class ="title">Likes</p>
                            <p class = "info">${likes}</p>
                            </li>
                            <li class = "views">
                            <p class ="title">Views</p>
                            <p class = "info">${views}</p>
                            </li>
                            <li class = "comments">
                            <p class ="title">Comments</p>
                            <p class = "info">${comments}</p>
                            </li>
                            <li class = "downloads">
                            <p class ="title">Downloads</p>
                            <p class = "info">${downloads}</p>
                            </li>
                    
                        </ul>
                    </div>
                    </a>
            </li>`
    )
    .join('');
  
   if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      caption: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

 


export function showLoading(element) {
  element.style.display = 'block';
}

export function hideLoading(element) {
  element.style.display = 'none';
}
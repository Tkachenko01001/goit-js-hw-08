// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');

const gallery = galleryItems.map((item) => 
`<a class="gallery__item" href="${item.original}">
  <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`)
.join(' ')

galleryEl.insertAdjacentHTML('afterbegin', gallery);


new SimpleLightbox('.gallery a', { 
        
    captionDelay: 250,
    captionsData: "alt",
      
 });

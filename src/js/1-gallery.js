// Импорты ДОЛЖНЫ быть в начале файла
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Белые и розовые орхидеи 1',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/flower-4208571__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/14/22/05/flower-4208571_1280.jpg',
    description: 'Жёлтая цветочная макро 2',
  },
  {
    preview: 'https://cdn.pixabay.com/photo/2019/05/13/16/31/flowers-4206203__480.jpg',
    original: 'https://cdn.pixabay.com/photo/2019/05/13/16/31/flowers-4206203_1280.jpg',
    description: 'Розовые цветы 3',
  },
];

// 1. Получаем элемент <ul class="gallery">
const gallery = document.querySelector('.gallery');

// 2. Генерируем HTML из массива images
const galleryHTML = images
  .map(
    (image) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${image.original}">
      <img
        class="gallery-image"
        src="${image.preview}"
        alt="${image.description}"
      />
    </a>
  </li>
  `
  )
  .join('');

// 3. Добавляем элементы в DOM
gallery.innerHTML = galleryHTML;

// 4. ПОСЛЕ добавления элементов - инициализируем SimpleLightbox
const lightbox = new SimpleLightbox('.gallery-link', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

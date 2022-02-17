import { galleryItems } from './gallery-items.js';
// Change code below this line

{
    /* <div class="gallery__item">
    <a class="gallery__item" href="large-image.jpg">
        <img
            class="gallery__image"
            src="small-image.jpg"
            alt="Image description"
        />
    </a>
</div>; */
}

// Выполняй это задание в файлах 02 - lightbox.html и 02 - lightbox.js.
// Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems
// и предоставленному шаблону элемента галереи.
// Используй готовый код из первого задания.
// Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs.
// Необходимо добавить ссылки на два файла: simple - lightbox.min.js
// и simple - lightbox.min.css.
// Инициализация библиотеки после того как элементы галереи созданы
// и добавлены в div.gallery.
// Для этого ознакомься с документацией SimpleLightbox -
//     в первую очередь секции «Usage» и «Markup».
// Посмотри в документации секцию «Options»
// и добавь отображение подписей к изображениям из атрибута alt.
// Пусть подпись будет снизу
// и появляется через 250 миллисекунд после открытия изображения.

const gallery = document.querySelector('.gallery');

const markupMade = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</div>`;
    })
    .join('');

const galleryMade = gallery.insertAdjacentHTML('beforeend', markupMade);
const unnecessaryLinks = document.querySelectorAll('a.gallery__item');

unnecessaryLinks.forEach(el => {
    el.addEventListener('click', onPreventDefault);
});

function onPreventDefault(event) {
    event.preventDefault();
}

const newLightbox = new SimpleLightbox('a.gallery__item', {
    captionType: 'attr',
    captionsData: 'alt',
    captionDelay: 250,
});

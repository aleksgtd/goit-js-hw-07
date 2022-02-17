import { galleryItems } from './gallery-items.js';
// Change code below this line

// Выполняй это задание в файлах 01 - gallery.html и 01 - gallery.js.
// Разбей его на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// 2. Реализация делегирования на div.gallery и получение url большого изображения.
// 3. Подключение скрипта и стилей библиотеки модального окна basicLightbox.
// Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные(.min) файлы библиотеки.
// 4. Открытие модального окна по клику на элементе галереи.
// Для этого ознакомься с документацией и примерами.
// 5. Замена значения атрибута src элемента < img > в модальном окне перед открытием.
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// РАЗМЕТКА ЭЛЕМЕНТА ГАЛЕРЕИ
// Ссылка на оригинальное изображение должна храниться в data - атрибуте source на элементе < img >,
//     и указываться в href ссылки.Не добавляй другие HTML теги или CSS классы кроме тех, что есть в этом шаблоне.

{
    /* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>;  */
}

//     Обрати внимание на то, что изображение обернуто в ссылку,
//     а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу.
//         Запрети это поведение по умолчанию.

// galleryItems = [
//   {
//     preview:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",
//     original:
//       "https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",
//     description: "Hokkaido Flower",
//   },

// ];

const gallery = document.querySelector('.gallery');

const markupMade = galleryItems
    .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href=${original} target="_blank">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');

const galleryMade = gallery.insertAdjacentHTML('beforeend', markupMade);
const unnecessaryLinks = document.querySelectorAll('a.gallery__link');

unnecessaryLinks.forEach(el => {
    el.addEventListener('click', onPreventDefault);
});

function onPreventDefault(event) {
    event.preventDefault();
}

gallery.addEventListener('click', onShowLightbox);

function onShowLightbox(event) {
    const targetEl = event.target;

    if (targetEl.nodeName !== 'IMG') {
        return;
    }

    const imgToShow = targetEl.cloneNode();
    imgToShow.src = imgToShow.dataset.source;

    const elToShow = document.createElement('div');

    elToShow.appendChild(imgToShow);

    const instance = basicLightbox.create(elToShow);

    instance.show();
}

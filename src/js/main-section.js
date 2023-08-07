// Импортируем стили и изображения
import '../sass/index.scss';
import bigPlaceholder from '../images/placeholders/big-placeholder.png';
import mediumPlaceholder from '../images/placeholders/medium-placeholder.png';
import smallPlaceholder from '../images/placeholders/small-placeholder.png';
// import trizub from '../images'

// Импортируем библиотеки для уведомлений и загрузки данных
import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

// Импортируем функцию для загрузки книг
import { fetchBooks } from './fetchBooks.js';
import Notiflix from 'notiflix';

// Получаем элементы DOM
const allCategoryBtn = document.querySelector('#allCategoryBtn');
const categorieList = document.querySelector('.categorie-list'); // Элемент списка категорий (Перевернутый)
const allBooksTitle = document.querySelector('.all-books-title'); // Заголовок "Все книги" (Перевернутый)
const bookListRef = document.querySelector('.category__books'); // Ссылка на список книг в категории (Панов)
const sortTitle = document.querySelector('.category-title'); // Заголовок категории (Панов)

// Добавляем обработчик клика на кнопку "Все категории"
allCategoryBtn.addEventListener('click', onAllCategoriesClick);

// Обработчик клика на кнопку "Все категории"
function onAllCategoriesClick() {
  startPage(); // Вызываем функцию для начала работы страницы
}


// Вызываем функцию для начала работы страницы
startPage();

// Функция для создания разметки книг
function markupBooks(array) {
  let bestBooks;
  const categories = array
    .map(arr => {
      bestBooks = arr.books
        .map(({ _id, book_image, title, author }) => {
          let placeholder;
          const imgSrc = true ? `${book_image}` : placeholder;

          // Определяем изображение-заглушку в зависимости от размера окна
          if (arr.length === 0) {
            placeholder = bigPlaceholder;
            Notiflix.Notify.failure('We didnt find any book');
            if (window.innerWidth < 768) {
              placeholder = smallPlaceholder;
            } else if (window.innerWidth < 1280) {
              placeholder = mediumPlaceholder;
            }
          }

          // Генерируем HTML для каждой книги
          return `
          <li class="book" id="${_id}">
            <div class="thumb">
              <img loading="lazy" class="book-photo" src="${imgSrc}" alt="${title || 'Not found'}" />
            </div>
            <h3 class="book-name">${title || 'Not found'}</h3>
            <span class="book-author">${author || 'Unknown author'}</span>
            <div class="all-book-popup"> quick view  </div>
          </li>`;
        })
        .join('');

      // Генерируем HTML для каждой категории
      return `
        <li class="categorie">
          <div>
            <h3 class="categorie-name">${arr.list_name}</h3>
            <ul class="book-list">
              ${bestBooks}
            </ul>
            <button class="btn-look" type="button" name="${arr.list_name}">show more</button>
          </div> 
        </li> 
      `;
    })
    .join('');

  return categories;
}

// Функция для начала работы страницы
async function startPage() {
  // Отображаем индикатор загрузки
  Loading.hourglass('Loading...', {
    messageColor: '#eac645',
    messageFontSize: '30px',
    svgSize: '100px',
    svgColor: '#eac645',
  });

  // Очищаем список книг и скрываем заголовки
  bookListRef.innerHTML = '';
  sortTitle.style.display = 'none';
  allBooksTitle.style.display = 'block';

  try {
    // Получаем данные о книгах и генерируем разметку
    const data = await fetchBooks();
    const markup = await markupBooks(data);

    // Вставляем разметку на страницу
    categorieList.innerHTML = markup;
  } catch (error) {
    console.log(error.message);
  }

  // Убираем индикатор загрузки через 500 мс
  Loading.remove(500);
}

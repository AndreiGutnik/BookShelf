// // Імпорт необхідних модулів і зображень
// import { openModalId } from './modals';
// import BooksService from './BooksService';

// import amazonPng from '../images/png-icons/shops/amazon-icon1x.png';
// import amazonPng2x from '../images/png-icons/shops/amazon-icon2x.png';
// import appleBookPng from '../images/png-icons/shops/applebook-icon1x.png';
// import appleBookPng2x from '../images/png-icons/shops/applebook-icon2x.png';
// import bookShopPng from '../images/png-icons/shops/bookshop-icon1x.png';
// import bookShopPng2x from '../images/png-icons/shops/bookshop-icon2x.png';

// // Отримання посилань на елементи DOM
// const allModal = document.querySelector('#allModal');
// const categorieList = document.querySelector('.categorie-list');
// const bookList = document.querySelector('.category__books');
// const storageButton = document.querySelector('.add-storage-button');
// const removeStorageBtn = document.querySelector('.remove-modal-btn');
// const storageDescription = document.querySelector('.storage-description');

// const booksService = new BooksService();
// const homePage = document.querySelector('.home-page');

// // Константа для зберігання даних в локальному сховищі
// const STORAGE_KEY = 'storage-data';

// // Масив та об'єкт для зберігання даних
// let storageArr = [];
// let storageObj = {};

// // Додавання обробників подій
// storageButton.addEventListener('click', onStorageAdd);
// removeStorageBtn.addEventListener('click', onStorageDelete);
// bookList.addEventListener('click', onIdClick);
// categorieList.addEventListener('click', onIdClick);

// // Функція, яка обробляє клік на елементі списку
// function onIdClick(e) {
//   // Якщо клік відбувся на BUTTON, UL, DIV або H3, ігноруємо його
//   if (
//     e.target.nodeName === 'BUTTON' ||
//     e.target.nodeName === 'UL' ||
//     e.target.nodeName === 'DIV' ||
//     e.target.nodeName === 'H3'
//   )
//     return;

//   // Знаходимо ID ближчого батька <li>
//   const id = e.target.closest('li').id;

//   // Виклик функції для відкриття модалки та створення її вмісту
//   openModalId();
//   createModal(id);
// }

// homePage.addEventListener('click', onBookClick);
// function onBookClick(evt) {
//   if (evt.target.nodeName !== 'DIV' && evt.target.className !== 'all-book-popup') {
//     return;
//   }
//   const boolId = evt.target.dataset.bookid;
// return bookId;
// }

// Імпорт необхідних модулів і зображень
import { openModalId } from './modals';
import refs from './refs';
import onError from './error';
import BooksService from './BooksService';

import amazonPng from '../images/png-icons/shops/amazon-icon1x.png';
import amazonPng2x from '../images/png-icons/shops/amazon-icon2x.png';
import appleBookPng from '../images/png-icons/shops/applebook-icon1x.png';
import appleBookPng2x from '../images/png-icons/shops/applebook-icon2x.png';
import bookShopPng from '../images/png-icons/shops/bookshop-icon1x.png';
import bookShopPng2x from '../images/png-icons/shops/bookshop-icon2x.png';

// // Отримання посилань на елементи DOM
// const categorieList = document.querySelector('.categorie-list');
// const bookList = document.querySelector('.category__books');

const {
  allModal,
  storageButton,
  removeStorageBtn,
  storageDescription,
  homePage,
} = refs;

const booksService = new BooksService();

// Константа для зберігання даних в локальному сховищі
const STORAGE_KEY = 'storage-data';

// Масив та об'єкт для зберігання даних
let storageArr = [];
let storageObj = {};

// Додавання обробників подій
storageButton.addEventListener('click', onStorageAdd);
removeStorageBtn.addEventListener('click', onStorageDelete);
// bookList.addEventListener('click', onIdClick);
// categorieList.addEventListener('click', onIdClick);
homePage.addEventListener('click', onBookClick);

// Функція, яка обробляє клік на елементі списку
// function onIdClick(e) {
//   if (
//     e.target.nodeName === 'BUTTON' ||
//     e.target.nodeName === 'UL' ||
//     e.target.nodeName === 'DIV' ||
//     e.target.nodeName === 'H3'
//   )
//     return;

//   const id = e.target.closest('li').id;
//   openModalId();
//   createModal(id);
// }

function onBookClick(evt) {
  if (
    evt.target.nodeName !== 'DIV' &&
    evt.target.className !== 'all-book-popup'
  ) {
    return;
  }
  const booklId = evt.target.dataset.bookid;
  openModalId();
  createModal(booklId);
}

// // Функція для обробки кліка на елементі "all-book-popup"
// function onBookClick(evt) {
//   if (evt.target.nodeName !== 'DIV' && evt.target.className !== 'all-book-popup') {
//     return;
//   }
//   const bookId = evt.target.dataset.bookid;
//   createModal(bookId);
// }

// // Асинхронна функція для створення вмісту модалки за допомогою отриманих даних
async function createModal(bookId) {
  allModal.innerHTML = '';
  try {
    booksService.bookId = bookId;
    const data = await booksService.getBooksById();
    storageCheck();
		createMarkup(data);
		createStorageObject(data);
    // return data;
  } catch (err) {
    onError(err);
  }
}

// Функція, що заповнює об'єкт даними зі звернення
function createStorageObject(data) {
  storageObj = {};
	storageObj = {
    book_image: data.book_image,
    title: data.title,
    author: data.author,
    marketAmazon: data.buy_links[0].url,
    marketAppleBooks: data.buy_links[1].url,
    marketBookshop: data.buy_links[4].url,
    list_name: data.list_name,
    id: data._id,
	};	
}

//   // Асинхронна функція для отримання даних про книгу за її ID
//   async function fetchBookById(bookId) {
//     try {
//       storageObj = {};

//       // Виконуємо запит на сервер
//       const response = await fetch(
//         `https://books-backend.p.goit.global/books/${bookId}`
//       );
//       const data = await response.json();

//       // Заповнюємо об'єкт даними зі звернення
//       storageObj = {
//         book_image: data.book_image,
//         title: data.title,
//         author: data.author,
//         marketAmazon: data.buy_links[0].url,
//         marketAppleBooks: data.buy_links[1].url,
//         marketBookshop: data.buy_links[4].url,
//         list_name: data.list_name,
//         id: data._id,
//       };

//       return data;
//     } catch (error) {
//       console.error('Помилка', error);
//       throw error;
//     }
// }

// Функція для перевірки наявності даних у локальному сховищі
function storageCheck() {
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
	const idToFind = storageObj.id;
	console.log(idToFind);
	console.log(!storageArr);
	
	

  if (!storageArr || storageArr.length === 0) {
    storageButton.style.display = 'block';
    removeStorageBtn.style.display = 'none';
    return;
  } else {
    const objToFind = storageArr.find(obj => obj.id === idToFind);
    if (!objToFind) {
      storageButton.style.display = 'block';
      removeStorageBtn.style.display = 'none';
    } else {
      storageButton.style.display = 'none';
      removeStorageBtn.style.display = 'block';
    }
  }
}

// Функція для створення розмітки модалки
function createMarkup(data) {
  const bookModalImage = data.book_image;
  const bookTitle = data.title;
  const bookAuthor = data.author;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url;

  const html = `
    <img src="${bookModalImage}" alt="Зображення книги" class="image-about-book-modal">
    <div class="info-modal">
      <h2 class="title-about-book-modal">${bookTitle}</h2>
      <p class="author-about-book-modal">${bookAuthor}</p>
      <p class="text-about-book-modal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>
      <ul class="shop-modal-list">
        <li class="shop-modal-item"><a href="${marketAmazon}" target="_blank">
          <img
            width="62"
            height="19"
            srcset="${amazonPng} 1x, ${amazonPng2x} 2x" 
            src="${amazonPng}"
            alt="Amazon"
          /></a>
        </li>
        <li class="shop-modal-item"><a href="${marketAppleBooks}" target="_blank">
          <img
            width="33"
            height="32"
            srcset="${appleBookPng} 1x, ${appleBookPng2x} 2x"
            src="${appleBookPng}"
            alt="AppleBooks"
          /></a>
        </li>
        <li class="shop-modal-item"><a href="${marketBookshop}" target="_blank">
          <img
            width="38"
            height="36"
            srcset="${bookShopPng} 1x, ${bookShopPng2x} 2x"
            src="${bookShopPng}"
            alt="Book-Shop"
          /></a>
        </li>
      </ul>
    </div>
  `;

  allModal.innerHTML = html;
}

// Функція для додавання даних до локального сховища
function onStorageAdd() {
	const realStorageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
	console.log(realStorageArr);	
	const dataToSave = storageObj;
	console.log(dataToSave);
	

  if (!realStorageArr || realStorageArr.length === 0) {
    storageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  } else {
    realStorageArr.push(dataToSave);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(realStorageArr));
  }

  storageDescription.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  storageCheck();
}

// Функція для видалення даних з локального сховища
function onStorageDelete() {
  storageDescription.textContent = '';

  const idToDelete = storageObj.id;
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
	const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);
	console.log(indexToDelete);
	
  storageArr.splice(indexToDelete, 1);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
  storageCheck();
}

// // Експортуємо функцію для створення модалки
// export { createModal };

import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
import { createMarkupByCategory, createMarkupBooks } from '../markup';
import refs from '../refs';
import onError from '../error';
const { categoryChoice, bookList, bookList0 } = refs;
const bookService = new BooksService();
fetchTopBooks();
async function fetchTopBooks() {
  try {
    const topBooks = await bookService.getTopBooks();
    const markup = createMarkupByCategory(topBooks);
    categoryChoice.insertAdjacentHTML('beforeend', markup);
    const loadMoreEl = document.querySelector('.load-more');
    categoryChoice.addEventListener('click', onLoadMoreClick);
  } catch (err) {
    onError(err);
  }
}
async function onLoadMoreClick(evt) {
  const loadMoreBtn = new LoadMoreBtn({
    selector: '.load-more',
    isHidden: true,
  });
  loadMoreBtn.disable();
  try {
    bookService.selectedCategory = evt.target.dataset.category;
    const booksByCategory = await bookService.getBooksByCategory();
    categoryChoice.classList.add('is-hidden');
    bookList0.innerHTML = createMarkupBooks(booksByCategory);
    // loadMoreBtn.enable();
  } catch (err) {
    onError(err);
  }
}


import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
import { createMarkup, createMarkupTop } from '../markup';
import refs from '../refs';
import onError from '../error';

const { categoryChoice, bookList, bookList0, loadMore } = refs;

const categoryService = new BooksService();
const bookService = new BooksService();
const loadMoreBtn = new LoadMoreBtn({ selector: '.load-more' });



  bookService.selectedCategory = 'Combined Print and E-Book Fiction';
bookService.getBooksByCategory()
  .then(data => {
    bookList0.insertAdjacentHTML('beforeend', createMarkupByCategory(data));
  })
  .catch(onError);


loadMoreBtn.button.addEventListener('click', () => {
  loadMoreBtn.disable();
  bookService.resetPage();

  bookService.getTopBooks()
    .then(data => {
      bookList0.innerHTML = createMarkupTop(data);
      loadMoreBtn.enable();
    })
    .catch(onError);
});


import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
import createMarkupTop from '../markup';
import createMarkup from '../markup';
import createMarkupByCategory from '../markup'
import refs from '../refs';
import onError from '../error';

const { categoryChoice, bookList, bookList0, loadMore } = refs;


const categoryService = new BooksService();
    const bookService = new BooksService();
    const loadMoreBtn = new LoadMoreBtn(loadMore);




  bookService.selectedCategory = 'Combined Print and E-Book Fiction';
bookService.getBooksByCategory()
  .then(data => {
    bookList0.insertAdjacentHTML('beforeend', createMarkupByCategory(data));
  })
  .catch(onError);


LoadMoreBtn.button.addEventListener('click', () => {
  LoadMoreBtn.disable();
  book.resetPage();

  book.getTopBooks()
    .then(data => {
      bookList0.innerHTML = createMarkupTop(data);
      LoadMoreBtn.enable();
    })
    .catch(onError);
});

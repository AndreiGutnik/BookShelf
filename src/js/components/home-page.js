import Notiflix from 'notiflix';
import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';

const { bookList, bookList0, loadMore} = refs;

const categoryService = new BooksService();
    const bookService = new BooksService();


function onError(err) {
  Notiflix.Notify.failure(`📌 ${err}`);
}

categoryService.getCategoryList()
  .then(data => {
    categoryChoice.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(onError);


  bookService.selectedCategory = 'Combined Print and E-Book Fiction';
bookService.getBooksByCategory()
  .then(data => {
    bookList0.insertAdjacentHTML('beforeend', createMarkupByCategory(data));
  })
  .catch(onError);


loadMoreBtn.button.addEventListener('click', () => {
  loadMoreBtn.disable();
  book.resetPage();

  book.getTopBooks()
    .then(data => {
      bookList0.innerHTML = createMarkupTop(data);
      loadMoreBtn.enable();
    })
    .catch(onError);
});

import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
import { createMarkup,
   createMarkupTop } from '../markup';
import refs from '../refs';
import onError from '../error';

const { categoryChoice, bookList, bookList0, loadMore } = refs;


const bookService = new BooksService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '.load-more',
  isHidden: true,
});

fetchCategory();

async function fetchCategory() {
 bookService.selectedCategory = 'Hardcover Fiction';
 try {
  const category = await bookService.getBooksByCategory();
  // const topBooks = await bookService.getTopBooks();
  // console.log(topBooks);
  const markup = createMarkup(category);
  categoryChoice.insertAdjacentHTML('beforeend', markup);
} catch (err) {
  onError(err);
}
}



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

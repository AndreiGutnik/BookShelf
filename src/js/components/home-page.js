import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
import { createMarkupByCategory,
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

 try {

   const topBooks = await bookService.getTopBooks();
   console.log(topBooks);
  const markup = createMarkupTop(topBooks);
  
  categoryChoice.insertAdjacentHTML('beforeend', markup);
} catch (err) {
  onError(err);
}
}



loadMoreBtn.button.addEventListener('click', () => {
  loadMoreBtn.disable();
  bookService.resetPage();

  bookService.getBooksByCategory()
    .then(data => {
      bookList0.innerHTML = createMarkupByCategory(data);
      loadMoreBtn.enable();
    })
    .catch(onError);
});

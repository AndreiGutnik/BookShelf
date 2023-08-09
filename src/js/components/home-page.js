import { Loading } from 'notiflix/build/notiflix-loading-aio';
import BooksService from '../BooksService';
import LoadMoreBtn from '../LoadMoreBtn';
// import Loader from '../Loader';
import { createMarkupByCategory, createMarkupBooks } from '../markup';
import refs from '../refs';
import onError from '../error';

const {
  categoryChoice,
  bookList,
  listTitle,
  bookList0,
  listTitleSpan,
  categoryListEl,
} = refs;

const bookService = new BooksService();
// const loader = new Loader('.loader');

async function fetchTopBooks() {
  try {
    const topBooks = await bookService.getTopBooks();
    const markup = createMarkupByCategory(topBooks);
		categoryChoice.insertAdjacentHTML('beforeend', markup);
		Loading.remove();
		// loader.hide();
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
	categoryListEl.querySelector('.active').classList.remove('active');  
  try {
    const categoryTitel = evt.target.dataset.category;
    const child = categoryListEl.childNodes;
    	[...child]
        .find(elem => elem.outerText === categoryTitel)
        .classList.add('active');
    bookService.selectedCategory = categoryTitel;
    const booksByCategory = await bookService.getBooksByCategory();
    categoryChoice.classList.add('is-hidden');
    bookList0.innerHTML = createMarkupBooks(booksByCategory);

    const lastWordOfCategory = categoryTitel.slice(
      categoryTitel.lastIndexOf(' ') + 1,
      categoryTitel.length
    );
    const firstWordOfCategory = categoryTitel.slice(
      0,
      categoryTitel.lastIndexOf(' ')
    );
    listTitle.textContent = firstWordOfCategory;
    listTitleSpan.textContent = lastWordOfCategory;
    console.log(listTitleSpan);
  } catch (err) {
    onError(err);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Loading.hourglass('Loading...', {
    messageColor: '#eac645',
    messageFontSize: '30px',
    svgSize: '70px',
    svgColor: '#eac645',
	});
	
	// loader.show();
	
	fetchTopBooks();
});

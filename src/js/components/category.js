import BooksService from '../BooksService';
import { createCategoryList, createMarkupBooks } from '../markup';
import refs from '../refs';
import onError from '../error';

const {
  categoryListEl,
  bookList0,
  categoryChoice,
  listTitle,
  listTitleSpan,
} = refs;

const booksService = new BooksService();

document.addEventListener('DOMContentLoaded', fetchCategoryList);
categoryListEl.addEventListener('click', onCategoryListClick);

async function fetchCategoryList() {
  try {
    const response = await booksService.getCategoryList();
    if (!response) {
      throw new Error('Помилка');
    }
    const categoryListMarkup = createCategoryList(response);
    categoryListEl.innerHTML = categoryListMarkup;
    categoryListEl.firstElementChild.classList.add('active');
  } catch (error) {
    onError(`Sorry, ${error.message}`);
  }
}

async function onCategoryListClick(evt) {
  const categoryName = evt.target.textContent;
	if (evt.target.nodeName !== 'LI') {
		return;
  }
	if (categoryName === 'All categories') {
		window.location.reload();
    return;
	}
	categoryListEl.querySelector('.active').classList.remove('active');
  try {
		booksService.selectedCategory = categoryName;
    const booksByCategory = await booksService.getBooksByCategory();
    evt.target.classList.add('active');
		categoryChoice.classList.add('is-hidden');
    bookList0.innerHTML = createMarkupBooks(booksByCategory);

    const lastWordOfCategory = categoryName.slice(
      categoryName.lastIndexOf(' ') + 1,
      categoryName.length
    );
    const firstWordOfCategory = categoryName.slice(
      0,
      categoryName.lastIndexOf(' ')
    );
    listTitle.textContent = firstWordOfCategory;
    listTitleSpan.textContent = lastWordOfCategory;
  } catch (err) {
    onError(err);
  }
}

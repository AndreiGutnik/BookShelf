import BooksService from '../BooksService';
import createCategoryList from '../markup';
import refs from '../refs';
import onError from '../error';
const { categoryListEl } = refs;
const booksService = new BooksService();
document.addEventListener('DOMContentLoaded', fetchCategoryList);
async function fetchCategoryList() {
  try {
    const response = await booksService.getCategoryList();
    if (!response) {
      throw new Error('Помилка');
    }
    const categoryListMarkup = createCategoryList(response);
    categoryListEl.insertAdjacentHTML('beforeend', categoryListMarkup);
    categoryListEl.firstElementChild.classList.add('active');
  } catch (error) {
    onError(`Sorry, ${error.message}`);
  }
}
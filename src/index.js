import Notiflix from 'notiflix';

import refs from './js/refs';
import BooksService from './js/BooksService';
import LoadMoreBtn from './js/LoadMoreBtn';
import markupImages from './js/markup';
import BooksService from './js/components/category';


const { } = refs;






function onError(err) {
  // loadMoreBtn.hide();
  Notiflix.Notify.failure(`📌 ${err}`);
}
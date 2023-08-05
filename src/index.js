import Notiflix from 'notiflix';

import refs from './js/refs';
import BooksService from './js/BooksService';
import LoadMoreBtn from './js/LoadMoreBtn';
import markupImages from './js/markup';

const { } = refs;






function onError(err) {
  // loadMoreBtn.hide();
  Notiflix.Notify.failure(`📌 ${err}`);
}


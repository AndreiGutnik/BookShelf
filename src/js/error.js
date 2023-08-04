import Notiflix from 'notiflix';

export default function onError(err) {
  Notiflix.Notify.failure(`📌 ${err}`);
}

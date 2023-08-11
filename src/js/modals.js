import refs from './refs';

const { idModal, closeModalBtn } = refs;

// Обработчик клика по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', closeModalId);

// Функция открытия модального окна по идентификатору
export function openModalId() {
  idModal.classList.remove('is-hidden');
  // idBackdropModal.classList.remove('is-hidden');
}

// Функция закрытия модального окна по идентификатору
function closeModalId() {
  idModal.classList.add('is-hidden');
  // idBackdropModal.classList.add('is-hidden');
}
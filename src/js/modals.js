

// Выбор элементов модальных окон и других элементов
const idModal = document.querySelector('.about-book-modal');
const closeModalBtn = document.querySelector('#modal-close');
const idBackdropModal = document.querySelector('.js-backdrop-modal');

// Функция открытия модального окна по идентификатору
function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
}

// // Функция закрытия модального окна по идентификатору
// function closeModalId() {
//   idModal.classList.add('is-hidden'null);
//   idBackdropModal.classList.add('is-hidden');
// }

// Функция закрытия модального окна по идентификатору
function closeModalId() {
  idModal.classList.add('is-hidden');
  idBackdropModal.classList.add('is-hidden');
}



// Обработчик клика по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', closeModalId);

export { openModalId };


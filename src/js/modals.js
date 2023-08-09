// Функция открытия модального окна по идентификатору
function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
}

// Функция закрытия модального окна по идентификатору
function closeModalId() {
  idModal.classList.add('is-hidden');
  idBackdropModal.classList.add('is-hidden');
}

// Обработчик клика по кнопке закрытия модального окна
closeModalBtn.addEventListener('click', closeModalId);

// Обработчик нажатия клавиши Escape для закрытия модального окна
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalId();
  }
});


// Обработчик клика по заднему фону модального окна
idBackdropModal.addEventListener('click', function (event) {
  if (event.target === idBackdropModal) {
    closeModalId();
  }
});

// Экспорт функции открытия модального окна по идентификатору
export { openModalId };
import { createModal } from './about-book-modal';
// Змінити на клік по зображенням


const registerModal = document.querySelector('.register-modal');
const loginModal = document.querySelector('.login-modal');
const idModal = document.querySelector('.about-book-modal');
const closeModalBtn = document.querySelector('#modal-close');
const fireBaseBackdrop = document.querySelector('.fire-base-backdrop');
const idBackdropModal = document.querySelector('.js-backdrop-modal');


function openModalId() {
  idModal.classList.remove('is-hidden');
  idBackdropModal.classList.remove('is-hidden');
    
}

function closeModalId() {
  idModal.classList.add('is-hidden');
  idBackdropModal.classList.add('is-hidden');
  // allModal.innerHTML = ''
}

function openModalRegister() {
  registerModal.classList.remove('is-hidden');
  fireBaseBackdrop.classList.remove('is-hidden');
}

function closeModalRegister() {
  registerModal.classList.add('is-hidden');
  fireBaseBackdrop.classList.add('is-hidden');
}
function openModalLogin() {
  loginModal.classList.remove('is-hidden');
  fireBaseBackdrop.classList.remove('is-hidden');
}

function closeModalLogin() {
  loginModal.classList.add('is-hidden');
  fireBaseBackdrop.classList.add('is-hidden');
}

closeModalBtn.addEventListener('click', closeModalId);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalId();
  }
});

idBackdropModal.addEventListener('click', function (event) {
  if (event.target === idBackdropModal) {
    closeModalId();
  }
});

export { openModalId };

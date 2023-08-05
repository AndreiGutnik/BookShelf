const throttle = require('lodash.throttle');

import refs from '../refs';

// import { initializeApp } from 'firebase/app';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   UserInfo,
// } from 'firebase/auth';
// import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCLvX8-Phpq_8ryBF-_fTZiLcLcJvYg6Ps',
//   authDomain: 'bookshelf-96ecb.firebaseapp.com',
//   projectId: 'bookshelf-96ecb',
//   storageBucket: 'bookshelf-96ecb.appspot.com',
//   messagingSenderId: '83733055479',
//   appId: '1:83733055479:web:3665918d4fcdd1c4d550f2',
//   measurementId: 'G-F45EYV47FF',
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

const {
  formAuth,
  inputAuthLogin,
  inputAuthEmail,
  inputAuthPassword,
  submitAuthbutton,
} = refs;

const KEY_AUTH_IN_STORAGE = 'authorization-form-state';
const dataAuthInStorage = {};

checkAuthStorage();

function checkAuthStorage() {
  try {
    const dataAuthInStorage = JSON.parse(
      localStorage.getItem(KEY_AUTH_IN_STORAGE)
    );
    if (
      !dataAuthInStorage ||
      !dataAuthInStorage.name ||
      !dataAuthInStorage.email
    )
      return;
    inputAuthLogin.value = dataAuthInStorage.name;
    inputAuthEmail.value = dataAuthInStorage.email;
  } catch {
    alert('Error in local storage! Empty key value.');
  }
}

formAuth.addEventListener('input', throttle(onEnterAuthInput, 500));
formAuth.addEventListener('submit', onClickAuthSubmit);

function onEnterAuthInput(event) {
  dataAuthInStorage[event.target.name] = event.target.value;
  dataAuthInStorage.password = '';
  localStorage.setItem(KEY_AUTH_IN_STORAGE, JSON.stringify(dataAuthInStorage));
}

function onClickAuthSubmit(event) {
  event.preventDefault();
  const dataAuthInStorage = JSON.parse(
    localStorage.getItem(KEY_AUTH_IN_STORAGE)
  );
  if (!dataAuthInStorage || !dataAuthInStorage.name || !dataAuthInStorage.email)
    return;
  console.log(dataAuthInStorage);
  event.target.reset();
  localStorage.removeItem(KEY_AUTH_IN_STORAGE);
}

function onClickAuthSubmit(evt) {
  evt.preventDefault();
  createUserWithEmailAndPassword(auth, email, password);
}

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
const throttle = require('lodash.throttle');

import refs from '../refs';

const {
  formAuth,
  inputAuthLogin,
  inputAuthEmail,
  inputAuthPassword,
  submitAuthbutton,
  submitBtn,
  signUp,
  signIn,
  userIs,
  userNone,
  modal,
} = refs;

const KEY_AUTH_IN_STORAGE = 'authorization-form-state';
const KEY_ARRAY_AUTH_IN_STORAGE = 'array-authorization-client';
const arrayDataAuthStorage = [];
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
    inputAuthPassword.value = dataAuthInStorage.password;
  } catch {
    alert('Error in local storage! Empty key value.');
  }
}

formAuth.addEventListener('input', throttle(onEnterAuthInput, 500));
formAuth.addEventListener('submit', onClickAuthSubmit);

function onEnterAuthInput(event) {
  dataAuthInStorage[event.target.name] = event.target.value;
  localStorage.setItem(KEY_AUTH_IN_STORAGE, JSON.stringify(dataAuthInStorage));
}

function onClickAuthSubmit(evt) {
  evt.preventDefault();
  const dataAuthInStorage = JSON.parse(
    localStorage.getItem(KEY_AUTH_IN_STORAGE)
  );
  if (!dataAuthInStorage || !dataAuthInStorage.name || !dataAuthInStorage.email)
    return;

  console.log(dataAuthInStorage);

  arrayDataAuthStorage.push(dataAuthInStorage);
  localStorage.setItem(
    KEY_ARRAY_AUTH_IN_STORAGE,
    JSON.stringify(dataAuthInStorage)
  );
  userIs.classList.remove('is-hidden');
  userNone.classList.add('is-hidden');
  evt.target.reset();
  localStorage.removeItem(KEY_AUTH_IN_STORAGE);
  refs.modal.classList.toggle('is-hidden');
  // createUserWithEmailAndPassword(
  // auth,
  // dataAuthInStorage.email,
  // dataAuthInStorage.password
  // )
  //   .then(userCredential => {
  //     // Signed in
  //     const user = userCredential.user;
  //     console.log(user);
  //     // ...
  //   })
  //   .catch(error => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     console.log(errorMessage);
  //     // ..
  //   });
  signInWithEmailAndPassword(
    auth,
    dataAuthInStorage.email,
    dataAuthInStorage.password
  )
    .then(userCredential => {
      console.log(userCredential.email);
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
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

signUp.addEventListener('click', () => {
  if (submitBtn.textContent !== 'Sign In') {
    inputAuthLogin.classList.remove('is-hidden');
    submitBtn.style.marginTop = '24px';
    submitBtn.textContent = 'Sign up';
  }
});
signIn.addEventListener('click', () => {
  if (submitBtn.textContent !== 'Sign Up') {
    inputAuthLogin.classList.add('is-hidden');
    submitBtn.style.marginTop = '74px';
    submitBtn.textContent = 'Sign in';
  }
});

import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserInfo,
} from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCLvX8-Phpq_8ryBF-_fTZiLcLcJvYg6Ps',
  authDomain: 'bookshelf-96ecb.firebaseapp.com',
  projectId: 'bookshelf-96ecb',
  storageBucket: 'bookshelf-96ecb.appspot.com',
  messagingSenderId: '83733055479',
  appId: '1:83733055479:web:3665918d4fcdd1c4d550f2',
  measurementId: 'G-F45EYV47FF',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth);

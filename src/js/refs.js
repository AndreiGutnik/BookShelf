import { doc } from 'firebase/firestore';

export default {
  formAuth: document.querySelector('.modal-form-auth'),
  inputAuthLogin: document.querySelector('[type="text"]'),
  inputAuthEmail: document.querySelector('[type="email"]'),
  inputAuthPassword: document.querySelector('[type="password"]'),
  submitBtn: document.querySelector('.sign-button-auth-submit'),
  signUp: document.querySelector('[sign-up]'),
  signIn: document.querySelector('[sign-in]'),
  modalAuth: document.querySelector('[data-modal]'),
  userNoneBtn: document.querySelector('.auth-logon-noneuser'),
  userNameBtn: document.querySelector('.auth-logon-isuser'),
  userNone: document.querySelector('.auth-logon-noneuser-text'),
  userName: document.querySelector('.auth-logon-isuser-text'),
  userLogout: document.querySelector('.auth-logout'),
};






	scrollUp: document.querySelector('.scroll-up')
};

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
  checkTheme: document.querySelector('.check-theme'),

  scrollUp: document.querySelector('.scroll-up'),

  burgerBtn: document.querySelector('.js-burger'),
  iconClose: document.querySelector('.close-menu'),
  iconBurger: document.querySelector('.open-menu'),
  mobileMenu: document.querySelector('.mobile-menu'),
  shoppingList: document.querySelector('.js-shopping-list'),
  homeLink: document.querySelector('.js-home-link'),
  headerCont: document.querySelector('.header-container'),
};

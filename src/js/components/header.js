import refs from '../refs';
const {
  burgerBtn,
  iconClose,
  iconBurger,
  mobileMenu,
  shoppingList,
  homeLink,
  sliderUkraine,
} = refs;
///////////////////////////Перемикач кнопки бургер//////////////////////////////
let isOpen = true;
burgerBtn.addEventListener('click', handlerChangeBtnMenu);
function handlerChangeBtnMenu() {
  const refs = {
    blockAuth: document.querySelector('.block-auth'),
    categoryChoice: document.querySelector('.category-choice'),
  };
  if (isOpen) {
    iconClose.classList.remove('is-hidden');
    iconBurger.classList.add('is-hidden');
    mobileMenu.classList.remove('is-hidden');
    setTimeout(() => {
      refs.blockAuth.style.display = 'block';
    }, 250);
    // sliderUkraine.style.zIndex = -1;
    refs.categoryChoice.classList.add('is-hidden');
    document.body.classList.add('pos-fixed');
    isOpen = false;
  } else {
    iconClose.classList.add('is-hidden');
    iconBurger.classList.remove('is-hidden');
    mobileMenu.classList.add('is-hidden');
    refs.blockAuth.style.display = 'none';
    // sliderUkraine.style.zIndex = 1;
    refs.categoryChoice.classList.remove('is-hidden');
    document.body.classList.remove('pos-fixed');
    isOpen = true;
  }
}

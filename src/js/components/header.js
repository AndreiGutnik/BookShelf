const burgerBtn = document.querySelector('.js-burger');
const iconClose = burgerBtn.querySelector('.close-menu');
const iconBurger = burgerBtn.querySelector('.open-menu');
const mobileMenu = document.querySelector('.mobile-menu');

let isOpen = true;

burgerBtn.addEventListener('click', handlerChangeBtnMenu);

function handlerChangeBtnMenu() {
        isOpen = !isOpen;
        if (isOpen) {
          iconClose.classList.remove('is-hidden');
          iconBurger.classList.add('is-hidden'); 
          mobileMenu.classList.remove('is-hidden');
             
        } else {
            iconClose.classList.add('is-hidden');
            iconBurger.classList.remove('is-hidden');
            mobileMenu.classList.add('is-hidden'); 
        }
    }


// const homeLink = document.querySelector('.home-link');
// const shoppingLink = document.querySelector('.shoping-link');

// const toggleCurrentColor = () => {
//   homeLink.classList.toggle('current-color');
//   shoppingLink.classList.toggle('current-color');
// };

// homeLink.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   if (!homeLink.classList.contains('current-color')) {
//     toggleCurrentColor();
//   }
// });

// shoppingLink.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   if (homeLink.classList.contains('current-color')) {
//     toggleCurrentColor();
//   }
// });

//////////////////КНОПКА ПЕРЕМИКАЧ /////  ВІКТОРІЯ////////////////////////
const checkTheme = document.querySelector('.check-theme');
checkTheme.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', 'dark');
    }
    addDarkClassHtml()
});
function addDarkClassHtml() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    }
    else {
      document.querySelector('body').classList.remove('dark');
    }
  } catch (err) { }
}
addDarkClassHtml();







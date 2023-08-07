import refs from '../refs';
const { burgerBtn, iconClose, iconBurger, mobileMenu, shoppingList, homeLink} = refs;

///////////////////////////Перемикач кнопки бургер//////////////////////////////
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
//////////////////////Перемикач жовтого фону для меню навігації /////////////////////

homeLink.addEventListener('click', handlerChangeColor);
shoppingList.addEventListener('click', handlerChangeColor);

function handlerChangeColor(evt) {
  const hasCurrentColorClass = evt.target.classList.contains('current-color');
  if (evt.target === homeLink) {
    if (!hasCurrentColorClass) {
      // Додаємо клас current-color, якщо його немає
      homeLink.classList.add('current-color');
      shoppingList.classList.remove('current-color');
    }
  } else if (evt.target === shoppingList) {
    if (!hasCurrentColorClass) {
      // Додаємо клас current-color, якщо його немає
      shoppingList.classList.add('current-color');
      homeLink.classList.remove('current-color');
    }
  }
}









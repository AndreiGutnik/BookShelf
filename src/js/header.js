const burgerBtn = document.querySelector('.js-burger');
burgerBtn.addEventListener('click', handlerChangeBtnMenu);

function handlerChangeBtnMenu() {
    const expanded = burgerBtn.getAttribute('aria-expanded') === "true" || false;
    burgerBtn.classList.toggle('is-open');
    burgerBtn.setAttribute('aria-expanded', !expanded);
}

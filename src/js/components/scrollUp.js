import refs from '../refs';

const { scrollUp } = refs;

scrollUp.addEventListener('click', onClick)
window.addEventListener('scroll', onScroll);

function onScroll() {
	const scrollY = window.scrollY || document.documentElement.scrollTop
	if (scrollY > 400) {
		scrollUp.classList.remove('is-hidden');
	} else {
		scrollUp.classList.add('is-hidden');
	}	
}

function onClick() {
	
}
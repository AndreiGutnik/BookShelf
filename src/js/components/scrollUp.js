import refs from '../refs';

const { scrollUp } = refs;

scrollUp.addEventListener('click', onClick);
window.addEventListener('scroll', onScroll);

function onScroll() {
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  if (scrollY > 200) {
    scrollUp.classList.remove('is-hidden');
  } else {
    scrollUp.classList.add('is-hidden');
  }
}

function onClick() {
	// if (window.pageYOffset > 0) {
  //   window.scrollBy(0, -50);
  //   setTimeout(onClick, 0);
  // }
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'smooth',
  // });
}

const sliderArrowDown = document.querySelector('.arrow-button');
const fundItems = document.querySelectorAll('.fund-item');
const totalItems = fundItems.length;
let activeIndex = 0;

sliderArrowDown.addEventListener('click', () => {
  if (window.innerWidth < 415) {
    if (activeIndex === 5) {
      document
        .querySelector('.fund-info')
        .scrollTo({ top: 0, behavior: 'smooth' });
      activeIndex = 0;
    } else {
      activeIndex = (activeIndex + 1) % totalItems;
    }
  } else if (window.innerWidth >= 415 && window.innerWidth < 1024) {
    if (activeIndex === 3) {
      document
        .querySelector('.fund-info')
        .scrollTo({ top: 0, behavior: 'smooth' });
      activeIndex = 0;
    } else {
      activeIndex = (activeIndex + 1) % totalItems;
    }
  } else {
    if (activeIndex === 4) {
      document
        .querySelector('.fund-info')
        .scrollTo({ top: 0, behavior: 'smooth' });
      activeIndex = 0;
    } else {
      activeIndex = (activeIndex + 1) % totalItems;
    }
  }

  fundItems[activeIndex].scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });

  const arrowIcon = sliderArrowDown.querySelector('.arrow-icon');
  arrowIcon.classList.toggle('active', activeIndex === totalItems - 1);

  if (window.innerWidth < 415 && activeIndex === 5) {
    arrowIcon.style.transform = 'rotate(180deg)';
  } else if (
    window.innerWidth >= 415 &&
    window.innerWidth < 1024 &&
    activeIndex === 3
  ) {
    arrowIcon.style.transform = 'rotate(180deg)';
  } else if (window.innerWidth >= 1024 && activeIndex === 4) {
    arrowIcon.style.transform = 'rotate(180deg)';
  } else {
    arrowIcon.style.transform = 'rotate(0deg)';
  }
});

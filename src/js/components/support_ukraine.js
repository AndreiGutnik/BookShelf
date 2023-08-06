const sliderArrowDown = document.querySelector('.arrow-button');
let turnButton = true;
let position = null;
const sponsorsList = document.querySelector('.fund-info');
sliderArrowDown.addEventListener('click', () => {
  if (turnButton) {
    position = 200;
    turnButton = false;
    sliderArrowDown.style.transform = 'rotate(180deg)';
  } else {
    position = 0;
    turnButton = true;
    sliderArrowDown.style.transform = 'rotate(360deg)';
  }
  sponsorsList.scroll({
    left: 0,
    top: position,
    behavior: 'smooth',
  });
});

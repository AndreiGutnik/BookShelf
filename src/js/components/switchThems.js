import refs from "../refs";
const { switchThems } = refs;

switchThems.addEventListener('click', onClick)

function onClick() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme'); 
  } else {
    localStorage.setItem('theme', 'dark');
    }
    addDarkClassHtml()
};

function addDarkClassHtml() {
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
    }
    else {
      document.querySelector('body').classList.remove('dark');
    }
}


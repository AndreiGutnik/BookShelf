
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
  } catch { }
}

addDarkClassHtml();
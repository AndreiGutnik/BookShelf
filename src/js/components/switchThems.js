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
  
    if (localStorage.getItem('theme') === 'dark') {
      document.querySelector('body').classList.add('dark');
      document.querySelector('body').classList.remove('light')
      checkTheme.checked = true;
    }
    else {
      document.querySelector('body').classList.remove('dark');
      document.querySelector('body').classList.add('light');
checkTheme.checked = false;
    }
  } 

addDarkClassHtml();


const themeSelector = document.getElementById('theme-selector');
const body = document.querySelector('body');

themeSelector.addEventListener('change', () => {
  if (themeSelector.value === 'theme-dark') {
    body.classList.add('theme-dark');
    body.classList.remove('theme-light');
  } else if (themeSelector.value === 'theme-light') {
    body.classList.add('theme-light');
    body.classList.remove('theme-dark');
  }
});

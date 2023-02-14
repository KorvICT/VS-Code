const themeSelector = document.getElementById('theme-selector');
const body = document.querySelector('body');

themeSelector.addEventListener('change', () => {
  if (themeSelector.value === 'dark') {
    body.classList.replace('light', 'dark');
  } else if (themeSelector.value === 'light') {
    body.classList.replace('dark', 'light')
  }
});

const bodyElement = document.querySelector('body');
const lightThemeButton = document.querySelector('#light-button');
const darkThemeButton = document.querySelector('#dark-button');

lightThemeButton.addEventListener('click', () => {
  bodyElement.classList.remove('dark-theme');
  bodyElement.classList.add('light-theme');
});

darkThemeButton.addEventListener('click', () => {
  bodyElement.classList.remove('light-theme');
  bodyElement.classList.add('dark-theme');
});


const bodyElement = document.querySelector('body');
const lightThemeButton = document.querySelector('#light-button');
const darkThemeButton = document.querySelector('#dark-button');

lightThemeButton.addEventListener('click', () => {
  bodyElement.classList.remove('dark');
  bodyElement.classList.add('light');
});

darkThemeButton.addEventListener('click', () => {
  bodyElement.classList.remove('light');
  bodyElement.classList.add('dark');
});


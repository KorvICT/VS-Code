const bodyElement = document.querySelector('body');
const lightThemeButton = document.querySelector('#light-button');
const darkThemeButton = document.querySelector('#dark-button');

lightThemeButton.addEventListener('click', theme, false);

darkThemeButton.addEventListener('click', theme, false);

function theme() {
  if (bodyElement.classList.contains('dark')){
    bodyElement.classList.replace('dark','light');
  }
  if (bodyElement.classList.contains('light')){
    bodyElement.classList.replace('light','dark');
  }
}
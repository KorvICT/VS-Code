// Elements
const body = document.body;
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");

// Events
darkButton.onclick = () => {
    body.classList.replace("light","dark");
}

lightButton.onclick = () => {
    body.classList.replace("dark","light");
}
// Elements
const body = document.body;
const darkButton = document.getElementById("darkb");
const lightButton = document.getElementById("lightb");

// Events
darkButton.onclick = () => {
    body.classList.replace("light","dark");
}

lightButton.onclick = () => {
    body.classList.replace("dark","light");
}
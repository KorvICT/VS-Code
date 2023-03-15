const themeToggle = document.getElementById("theme");
const body = document.body;

function start(){
    themeToggle.addEventListener("click",toggle,false);
}

function toggle(){
    if(body.classList.contains("dark")){
        body.classList.replace("dark","light");
    }
    if(body.classList.contains("light")){
        body.classList.replace("light","dark");
    }
}

window.addEventListener("load",start,false);
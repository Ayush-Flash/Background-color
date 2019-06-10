var colorx = document.getElementById("color1");
var copy = document.querySelector("h3");
var colory = document.getElementById("color2");
var gradient = document.getElementById("gradient");

function addColorFunction() {
    gradient.style.background = "linear-gradient(to right," + colorx.value + ", " + colory.value + ")";
    copy.textContent = "background: "+gradient.style.background+";";
}

colorx.addEventListener("input", addColorFunction);
colory.addEventListener("input", addColorFunction);
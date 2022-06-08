var buttons;
var telwrite;

function numer() {
buttons  = document.querySelectorAll("input.przycisk");
telwrite = document.querySelector("#telwrite")
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", x, false);
}
}

function x(event) {
    telwrite.innerHTML += event.target.value;
}

window.addEventListener("load", numer, false);
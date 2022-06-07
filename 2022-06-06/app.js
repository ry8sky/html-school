// let - stała
// var - zmienna
var poleTekstowe;
var poleRezultat;
var button1;


function init() {
    console.log("Strona się załadowała");
    var button1 = document.querySelector("#button1");
    button1.addEventListener("click", akcjaprzycisk, false);
}

function akcjaprzycisk() {
    var poleTekstowe = document.querySelector("#txtName");
    var rezultat = document.querySelector("#rezultat");
    rezultat.innerHTML = poleTekstowe.value;
}

window.addEventListener("load", init, false);

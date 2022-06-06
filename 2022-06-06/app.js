// pola dokumentu które WYKORZYSTAMY więcej niż raz
var poleTekstowe;
var poleRezultat;
var button1;

function init() {
    console.log("Strona się załadowała");
    button1 = document.querySelector("#button1");
    poleTekstowe = document.querySelector("#txtName");
    poleRezultat = document.querySelector("#result");


    button1.addEventListener("click", akcjaPrzycisk, false);
    button1.disabled = true;
    poleTekstowe.addEventListener("input", zmianaPola, false);
}

function akcjaPrzycisk() {
    poleRezultat.innerText = poleTekstowe.value;
}

function zmianaPola() {
    if(poleTekstowe.value.length < 6) {
        poleTekstowe.classList.add("bledna-wartosc");
        button1.disabled = true;
    } else {
        poleTekstowe.classList.remove("bledna-wartosc");
        button1.disabled = false;
    }
}

window.addEventListener("load", init, false);
var tl1;
var tl2;
var tl3;
var tl4;
var tl5;
var tl6;
var tl7;
var tl8;
var tl9;
var tl0;
var telwrite;

function numer() {
    var tl1 = document.querySelector("#tel1");
    tl1.addEventListener("click", x, false);
    var tl2 = document.querySelector("#tel2");
    tl2.addEventListener("click", x, false);
    var tl3 = document.querySelector("#tel3");
    tl3.addEventListener("click", x, false);
    var tl4 = document.querySelector("#tel4");
    tl4.addEventListener("click", x, false);
    var tl5 = document.querySelector("#tel5");
    tl5.addEventListener("click", x, false);
    var tl6 = document.querySelector("#tel6");
    tl6.addEventListener("click", x, false);
    var tl7 = document.querySelector("#tel7");
    tl7.addEventListener("click", x, false);
    var tl8 = document.querySelector("#tel8");
    tl8.addEventListener("click", x, false);
    var tl9 = document.querySelector("#tel9");
    tl9.addEventListener("click", x, false);
    var tl0 = document.querySelector("#tel0");
    tl0.addEventListener("click", x, false);
}

function x() {
    var telwrite = document.querySelector(telwrite);
    telwrite.innerHTML = value;
}

window.addEventListener("load", numer, false);
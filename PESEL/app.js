 var wpiszNrPESEL;
 var outputChkdPESEL;



 function kliknijSprawdz() {
    var button1 = document.querySelector("#button1");
    button1.addEventListener("click", wykonaj, false);
}

 function wykonaj() {
    var wpiszNrPESEL = document.querySelector("#wpiszNrPESEL");
    var outputChkdPESEL = document.querySelector("#outputChkdPESEL")
    outputChkdPESEL.innerHTML = wpiszNrPESEL.value;
}

pesel = "97081608113";

console.log(pesel.substring(6,10));
console.log(pesel.charAt(10));

var y = pesel.substring(0,2);var m = pesel.substring(2,4);var d = pesel.substring(4,6);
console.log(parseInt(y)+"-"+parseInt(m)+"-"+parseInt(d));

var sexMW = pesel.charAt(9);
function sex() {
    if (sexMW % 2 == 0) {
    return "W"; 
   }    else 
    return "M";
}
console.log(sex);

function suma() {
var suma = pesel.charAt(0)*1+pesel.charAt(1)*3+pesel.charAt(2)*7+pesel.charAt(3)*9+pesel.charAt(4)*1+pesel.charAt(5)*3+pesel.charAt(6)*7+pesel.charAt(7)*9+pesel.charAt(8)*1+pesel.charAt(9)*3+pesel.charAt(10)*1;
    if (suma.charAt(2) == 0) {
        return "Suma kontrolna: Ok!"
    } else 
    return "Suma kontrolna: Błąd!"
}

window.addEventListener("load", kliknijSprawdz, false);
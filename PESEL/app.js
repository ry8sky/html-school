 var wpiszNrPESEL;
 var outputChkdPESEL;

 function kliknijSprawdz() {
    var button1 = document.querySelector("#button1");
    button1.addEventListener("click", wykonaj, false);
}
 function wykonaj() {
    var wpiszNrPESEL = document.querySelector("#wpiszNrPESEL");
    var outputChkdPESEL = document.querySelector("#outputChkdPESEL")
    var pesel = wpiszNrPESEL.value;
    var rel = "";
    rel += "Data urodzenia: " + zwrocDate(pesel) + "<br>";
    rel += "Płeć: " + zwrocPlec(pesel) + "<br>";
    rel += "Suma kontrola: " + sprawdzSumeKontrolna(pesel);
    outputChkdPESEL.innerHTML = rel;
}
function zwrocDate(pesel) {
    var y = parseInt(pesel.substring(0,2));
    var m = parseInt(pesel.substring(2,4));
    var d = parseInt(pesel.substring(4,6));

    var dekada;
    switch(Math.floor(m/20)) {
        case 0:
            dekada = 1900;
            break;
        case 1:
            dekada = 2000;
            break;
        case 2:
            dekada = 2100;
            break;
        case 3:
            dekada = 2200;
            break;
        case 4:
            dekada = 1800;
            break;
        default:
            dekada = 0;
            break;
    }
    m%= 20;
    return (dekada+y).toString() + "-" + m.toString() + "-" + d.toString(); 
}
function zwrocPlec(pesel) {
var sexMW = pesel.charAt(9);
    if (sexMW % 2 == 0) {
        return "W"; 
   }  else  return "M";
}
function sprawdzSumeKontrolna(pesel) {
    let wagi = [1,3,7,9,1,3,7,9,1,3,1]
    var suma = 0;
    for (let i = 0; i < wagi.length; i++) {
        suma += (parseInt(pesel[i]) * wagi[i])
    }
    if (suma % 10 == 0) return "Ok!";
    else return "Błąd!";
}

window.addEventListener("load", kliknijSprawdz, false);
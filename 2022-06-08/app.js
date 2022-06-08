// Zadanko do przećwiczenia: wyciągnięcie danych z PESEL (d/m/r, płeć, sprawdzanie sumy kontrolnej dodatkowo)

function init() {
    var result = document.querySelector("#result");

    var txtA = "Lorem ipsum", txtB = "dolor sit amet";
    var txtC = txtA + ' ' +  txtB   // łączenie tekstów <- "Lorem ipsum dolor sit amet"

    var tekst = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget.";
    tekst.length;     // właściwość która zawiera długość (liczbę znaków) [tekst]
    tekst.charAt(9);  // wyciąga jeden, konkretny znak o pozycji [9] (zaczynając od 0) ze stringa [tekst]
                      // zapis alt: tekst[9]

    tekst.indexOf("Lorem");     // zwraca pozycję (zaczynając od 0) pierwszego znaku PIERWSZEGO wystąpienia ["Lorem"] z [tekst] 
                                // jeżeli ["Lorem"] jest częścią [tekst], wpp zwraca -1
    tekst.lastIndexOf("Lorem"); // zwraca pozycję (zaczynając od 0) pierwszego znaku OSTATNIEGO wystąpienia ["Lorem"] z [tekst] 
                                // jeżeli ["Lorem"] jest częścią [tekst], wpp zwraca -1
    
    var tekst2 = "Jowita";
    tekst2.endsWith("a");    // zwraca informację (true/false), czy [tekst2] KOŃCZY się na ["a"] 
    tekst2.endsWith("ita");  // <- true
    tekst2.endsWith("2137"); // <- false

    tekst2.startsWith("Jow"); // zwraca informację (true/false), czy [tekst2] ZACZYNA się na ["Jow"]

    tekst2.includes("wit");  // zwraca informację (true/false), czy [tekst2] ZAWIERA ["wit"]


    tekst.substring(0, 6);  // zwraca CIĄG ZNAKÓW będący częścią [tekst] (dokładniej - znaki od [0] do [6], ale bez [6]) <- "Lorem "
    tekst.substring(25)     // zwraca CIĄG ZNAKÓW będący częścią [tekst] (dokładniej - znaki od [25] do końca)

    tekst.split(" ");       // zwraca TABLICĘ CIĄGÓW ZNAKÓW powstałą w wyniku podzielenia [tekst] separatorem [" "]
    tekst.replace(",", ""); // zamienia w [tekst] wszystkie wystąpienia [","] na [""] i zwraca tekst z wykonaną zamianą

    var tekst3 = "     Lorem ipsum      ";
    tekst3.trim();          // usuwa białe znaki z początku i z końca [tekst3] <- "Lorem ipsum"
    tekst3.trimStart()      // usuwa białe znaki TYLKO Z POCZĄTKU [tekst3] <- "Lorem ipsum      "
    tekst3.trimEnd()        // usuwa białe znaki TYLKO Z KOŃCA [tekst3] <- "     Lorem ipsum"

    var tekst4 = "Lorem ipsum dolor sit amet";
    tekst4.toLowerCase();   // zamienia [tekst4] na małe znaki i zwraca zamienione
    tekst4.toUpperCase();   // zamienia [tekst4] na wielkie znaki i zwraca zamienione

    var daneZFormularza1 = "2137";
    parseInt(daneZFormularza1);     // próbuje zamienić [daneZFormularza1] na liczbę CAŁKOWITĄ (i zwraca jeżeli się uda, lub NaN wpp)
    parseFloat(daneZFormularza1);   // próbuje zamienić [daneZFormularza1] na liczbę RZECZYWISTĄ (i zwraca jeżeli się uda, lub NaN wpp)

    var danePrzetworzone = 2137;
    danePrzetworzone.toString();    // zwraca [danePrzetworzone] jako CIĄG ZNAKÓW
}

// poza konkursem
function ileCyfr(liczba)  {
    var len = 0;
    while(liczba > 0) {
        len++;
        liczba /= 10;
        liczba = liczba.toFixed(0);
    }
    return len;
}

// przydaś na różne okazje
function czyParzysta(liczba) {
    return liczba % 2 == 0;
}

// camelCase: kolejneWyrazyZaczynamyWielkaLiteraOproczPierwszego
// snake_case: wyrazy_sa_rozdzielone_znakiem_podlogi
// PascalCase: CosJakCamelCaseAlePierwszyWyrazJestTezGrzeczny
// kebab-case: nadziewamy-slowa-na-szaszlyk // w JS to nie działa, ale w CSS już tak

window.addEventListener("load", init, false);
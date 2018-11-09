var PESEL = prompt("Podaj swój PESEL");
var suma = 0

if (PESEL != null && PESEL.length===11) {
    for (var i=0; i<11; i++) suma += PESEL[i];

    console.log("Mój nr PESEL to " + PESEL);
    console.log("suma="+ suma);
    console.log(suma% 10);
}
else {console.log("PESEL musi mieć 11 cyfr");
}
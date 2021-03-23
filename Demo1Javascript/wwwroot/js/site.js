// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
console.log('Hello Javascript!');
let getal;
getal = 10;
console.log(getal);
const constanteWaarde = 'constante waarde';
document.write('<h1>' + constanteWaarde + '</h1>');
//berekening wordt aangeroepen in Demo10.html
function berekening() {
    let x = 1;
    let y = 2;
    alert(x + y);
}

//leeftijdTekst() wordt aangeroepen in Demo11.html
function leeftijdTekst() {
    //16;
    let age = document.getElementById("txtAge").value
    let commentaardiv = document.getElementById("commentaar");
    if (age < 12) {
        commentaardiv.innerHTML = "<h1>Te jong</h1>";
        //document.write("Te jong");
        //alert("Niet voor minderjarigen!");
    }
    else if (age < 18) {
        commentaardiv.innerHTML = "<h1>Jong genoeg</h1>";
        //document.write("Jong genoeg");
    }
    else {
        commentaardiv.innerHTML = "<h1>Volwassen</h1>";
        //document.write("volwassen");
    }
}
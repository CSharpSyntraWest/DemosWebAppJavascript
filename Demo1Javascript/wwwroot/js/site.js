﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
//console.log('Hello Javascript!');
//let getal;
//getal = 10;
//console.log(getal);
//const constanteWaarde = 'constante waarde';
//document.write('<h1>' + constanteWaarde + '</h1>');
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

//OefeningFunctie.html
function groet() {
    let naam = document.getElementById("txtNaam").value;
    let commentaardiv = document.getElementById("commentaar");
    commentaardiv.innerHTML = '<h1> Welkom ' + naam + '</h1>'; 
}

//Demo12.html
function som() {
    let naam = prompt("Wat is uw naam?");
    alert('Hallo ' + naam);
    let getal1 = parseInt(document.getElementById("getal1").value);
    let getal2 = parseInt(document.getElementById("getal2").value);


    let result = document.getElementById("resultaat");
    //parse
    result.innerHTML = "<h1> de som is: " + (getal1 + getal2) + "</h1>"
}

//Demo13.html
function sayHi() {
   
    let firstname = document.myInputForm.firstName.value;
    let lastname = document.myInputForm.lastName.value;
    let fullname = firstname + " " + lastname;
    alert('Hi ' + fullname + '!');
    //let messageParagraph = document.getElementById("message");
    //messageParagraph.innerHTML = "<h1>Hi " + fullname + "!</h1>";
    document.myInputForm.message.innerHTML = "Hi " + fullname + "!";
}

//Demo15.html
function validate() {
    let text = document.getElementById("textfield").value;
    let genders = document.getElementsByName("gender")
    
    let message = document.getElementById("message");
    message.innerHTML = "<h2> text value: " + text + "<h2>";
    for (let i = 0; i < genders.length; i++)
    {
        let status = genders[i].checked == true ? "checked" : "unchecked"; 
        message.innerHTML += "<h2> gender value: " + genders[i].value + " status: " + status + "<h2>";
    }
}

//Demo16.html
function maximum(getal1, getal2) {
    return getal1 > getal2 ? getal1 : getal2;
}
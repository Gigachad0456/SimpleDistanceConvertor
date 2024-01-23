(function () {
"use strict";
let convertType = "miles";
let heading = document.querySelector('h1');
let intro = document.querySelector("p");
const form = document.getElementById("convert");
const ansDiv = document.getElementById('answer');

document.addEventListener('keydown', function (e) {

    let key = e.code;
    if (key === 'KeyK') {
        convertType = "KM";
        heading.innerHTML = "Kilometers to Miles Converter";
        intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";

    } else if (key === 'KeyM') {
        convertType = "Miles";
        heading.innerHTML = "Miles to Kilometers Converter";
        intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";
    }

});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let distance = parseFloat(document.getElementById('distance').value);

    if (distance) {
        //convert M to K ratio is 1.609344
        //convert K to M ratio is 0.621371192

        if (convertType === 'miles') {
            const convertMiles = (distance * 1.609344).toFixed(3);
            ansDiv.innerHTML = `${distance} miles converts to ${convertMiles} km`;
        } else {
            const convertKm = (distance * 0.621371192).toFixed(3);
            ansDiv.innerHTML = `${distance} km converts to ${convertKm} miles`;
        }
    } else {
        ansDiv.innerHTML = '<h2>Please provide a number!!</h2>';
    }
});
}());
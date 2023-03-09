// ISTRUZIONI:
// Salutare l'utente e chiedere il numero di chilometri che vuole percorrere
// Chiedere l'età dell'utente
// Controllare che l'utente abbia risposto correttamente alle domande
// Calcolare il prezzo totale del viaggio applicando queste regole
    // Prezzo al km 0.21£
    // Sconto 20% per i minorenni
    // Sconto 40% per gli over 65
// OUTPUT: 
// Usare un bottone per far partire il calcolo
//Stampare il prezzo finale (con massimo due decimali)


// ESERCIZIO:

// BOTTONE:
const sumbitBtn = document.getElementById("submit-btn");
sumbitBtn.addEventListener("click", function() {

// LABELS:

// Salutare l'utente e chiedere il numero di chilometri che vuole percorrere
const inputTravelKm = document.getElementById("distance");
const travelKm = inputTravelKm.value;
console.log(travelKm);

inputTravelKm.value = "";

// Chiedere l'età dell'utente
const inputUserAge = document.getElementById("age");
const userAge = inputUserAge.value;
console.log(userAge);

inputUserAge.value = "";

// OPZIONALE: Chiedere stazione di partenza e stazione di arrivo
const inputStartStation = document.getElementById("startstation");
const startStation = inputStartStation.textContent;
console.log(startStation)
document.getElementById("departure-station").innerHTML = ` ${startStation}`;
inputStartStation.textContent = "";

const inputArrival = document.getElementById("arrival");
const arrivalStation = inputArrival.textContent;
console.log(arrivalStation)
document.getElementById("arrival-station").innerHTML = ` ${arrivalStation}  `;
arrivalStation.textContent = "";

// Calcolare il prezzo totale del viaggio applicando queste regole
    // Prezzo al km 0.21£
const priceKm = (0.21);
    // Sconto 20% per i minorenni
const underageDiscount = (0.80);
    // Sconto 40% per gli over 65
const over65Discount = (0.60);

// Controllare le risposte dell'utente


// Prezzo finale per un minorenne
let finalPrice = "";
if (userAge < 18) {
    finalPrice = (travelKm * priceKm * underageDiscount).toFixed(2);
} else if (userAge >= 65) {
    finalPrice = (travelKm * priceKm * over65Discount).toFixed(2);
} else {
    finalPrice = (travelKm * priceKm).toFixed(2);
}
console.log(finalPrice)

// Stampare prezzo finale con controllo risposte utente
const pricedisplay = document.getElementById("pricedisplay");
pricedisplay.className = "";

if (isNaN(travelKm)) {
    document.getElementById("error").innerHTML = "Errore! Ricaricare la pagina e compilare il form correttamente"
} else if (isNaN(userAge)) {
    document.getElementById("error").innerHTML = "Errore! Ricaricare la pagina e compilare il form correttamente"
} else {
    document.getElementById("pricedisplay").innerHTML = `Il prezzo del suo biglietto è: ${finalPrice}£`;
}

});


// BOTTONE ANNULLA:
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click", function() {

    document.getElementById("pricedisplay").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("arrival-station").innerHTML = ``;
    document.getElementById("departure-station").innerHTML = ``;
});
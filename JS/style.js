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

     // Ripulire il risultato
        const pricedisplay = document.getElementById("pricedisplay");
        pricedisplay.className = "";

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
if (isNaN(travelKm)) {
    document.getElementById("error").innerHTML = "Errore. Ricaricare la pagina e compilare il form con dei numeri"
} else if (isNaN(userAge)) {
    document.getElementById("error").innerHTML = "Errore. Ricaricare la pagina e compilare il form con dei numeri"
} else {
    document.getElementById("pricedisplay").innerHTML = `Grazie utente. Il prezzo del suo biglietto è ${finalPrice}£`;
}



});
const baseURL = "https://api.magicthegathering.io";

const name = document.getElementById('nameOfCard');
const picture = document.getElementById('pickBox'); 
const type = document.getElementById('typeOfCard');
const txtbox = document.getElementById('descriptor');

let cardName = document.createElement("h3")
name.appendChild(cardName);

let pictbox = document.createElement("img")
picture.appendChild(pictbox);

let wordbox = document.createElement("h3")
txtbox.appendChild(wordbox);

let descript = document.createElement("h3")
txtbox.appendChild(descript);


//queryselector for button
const randoButton = document.querySelector('.drawCard')
// addeventlistener for button
randoButton.addEventListener('click', fetchResults);
fetchResults();



function fetchResults() {

    let tomato = `${baseURL}/v1/cards`

    fetch(tomato)
    .then(function(tomatoJuice) {
        return tomatoJuice.json();
    })
    .then(function(pizza) {
    console.log(pizza);
    displayResults(pizza);
    });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  



function displayResults(pizza) {
//this will display your info on card
let x = getRandomInt(99);
console.log(x);

cardName.innerText = pizza.cards[x].name;



pictbox.src = pizza.cards[x].imageUrl;



descript.innerText = pizza.cards[x].originalText;



type.innerText = pizza.cards[x].type;





};
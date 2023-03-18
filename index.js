let player = {
  name: "Syed",
  chips: 100,
};

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let cards = [];
let sum = 0;
let gameOn = false;
let blackjack = false;
let message = "";

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function randomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  gameOn = true;
  let firstCard = randomCard();
  let secondCard = randomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i in cards) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    blackjack = true;
  } else {
    message = "You're out of the game!";
    gameOn = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  if (gameOn === true && blackjack === false) {
    let card = randomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}

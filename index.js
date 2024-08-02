// let player = {
//     Name: "Per",
//     Chips: 145,
 
// }

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
// let sumEl=document.querySelector("#sum-el");

// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.Name + ":$" + player.Chips;
function startGame() {
    isAlive = true;
    let Firstcard = getRandomCard();
    let SecondCard = getRandomCard();
    cards = [Firstcard, SecondCard];
    sum = Firstcard + SecondCard;
    renderGame();
}
function resetgame(){
    messageEl.textContent="Want to play another round ?"
    sumEl.textContent="Sum:" + "";
    cardEl.textContent="Cards"+ "";
}
function getRandomCard() {
    let RandomCard = Math.floor(Math.random() * 13) + 1;
    if (RandomCard > 10) {
        return 10;
    }
    else if (RandomCard === 1) {
        return 11;
    }
    else {
        return RandomCard;
    }
    //   return RandomCard;

}
function renderGame() {
    sumEl.textContent = "Sum : " + sum;
    cardEl.textContent = "Cards : ";
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    if (sum <= 20) {
        message = ("Do you want to draw another card ??");

    }
    else if (sum === 21) {
        message = ("Wohoo!!! You have got blackjack!! ");
        hasBlackJack = true;
    }
    else {
        message = ("You are out of the Game");
        isAlive = false;
    }
    messageEl.textContent = message;
    // console.log(sum);
    // // console.log(hasBlackJack);
    // console.log(isAlive);
    // console.log(message);
}
function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}
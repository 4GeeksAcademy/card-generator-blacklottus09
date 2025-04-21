import "./style.css";

window.onload = function() {     
  let suit = ["♦", "♥", "♠", "♣"];     
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];     
  let randomNumber = Math.floor(Math.random() * cardNumber.length);     
  let randomSuit = Math.floor(Math.random() * suit.length);             

  function isItRed(randomSuit) {       
      return (randomSuit === 0 || randomSuit === 1) ? "text-danger" : "";     
  }

  function isTheNumberRed(randomSuit, randomNumber) {
      const redNumbers = ["A", "J", "Q", "K"];
      return (redNumbers.includes(cardNumber[randomNumber]) && (randomSuit === 0 || randomSuit === 1)) ? "text-danger" : "";       
  }

  document.getElementById("card").innerHTML = `       
      <div class="stick ${isItRed(randomSuit)}"><p>${suit[randomSuit]}</p></div>       
      <div class="number ${isTheNumberRed(randomSuit, randomNumber)}"><p>${cardNumber[randomNumber]}</p></div>       
      <div class="secondStick ${isItRed(randomSuit)}"><p>${suit[randomSuit]}</p></div>     
  `;
};
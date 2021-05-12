/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// <!-- ♦ ♥ ♠ ♣ -->

window.onload = function() {
  let number = document.querySelector(".number");
  const symbols = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "K",
    "J",
    "Q"
  ];
  let randomSymbol = symbols[Math.floor(Math.random() * 12)];
  number.innerHTML = randomSymbol;
  let cornerSymbols = document.querySelectorAll(".suit");
  let suits = ["&hearts;", "&diams;", "&spades;", "&clubs;"];
  let randomSuits = suits[Math.floor(Math.random() * 4)];

  cornerSymbols.forEach(suit => {
    suit.innerHTML = randomSuits;
    if (randomSuits == "&hearts;" || randomSuits == "&diams;") {
      suit.style.color = "red";
      number.style.color = "red";
    } else suit.style.color = "black";
  });
};

const WORDLE_DICTIONARY = [
  "APPLE",
  "ABOUT",
  "PIANO",
  "HOUSE",
  "ALONE",
  "ABOVE",
  "MEDIA",
  "RADIO",
  "VOICE",
  "VALUE",
  "ALIVE",
  "OCEAN",
  "IMAGE",
];

// a function to randomly select a word from the WORDLE_DICTIONARY for the current session.
function selectWord() {
  const num = Math.floor(Math.random() * WORDLE_DICTIONARY.length);
  wordleAnswer = WORDLE_DICTIONARY[num];
  return wordleAnswer;
}

let wordleAnswer = "";
let hintCount = 0;
window.onload = selectWord;

function hintGiver(ans) {
  // gives the first and last character of the correct answer.
  let firstChar = ans.substring(0, 1);
  let lastChar = ans.slice(-1);
  alert(
    `Hint: the first character is ${firstChar} and the last character is ${lastChar}.`
  );
}

function getWord() {
  // const userGuess = (prompt("Enter your guess in the input box. (5 Letter word, no spaces please.)")).toUpperCase();
  const userGuess = alert("Please enter a guess in the input box");
  return userGuess;
}

// Main function to run the game;
function runGame() {
  let userGuess = document.getElementById("inputbox").value.toUpperCase();
  let word = wordleAnswer;

  if (!(userGuess === word)) {
    hintCount + 1;
    alert("Please try again!");
    if (hintCount % 5 === 0) {
      // A hint is given every 5 attempts
      hintGiver(word);
    }
  }
  if (userGuess === word) {
    alert("Correct! You have got the right answer!");
  }
}

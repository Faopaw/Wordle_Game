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

// Add event listener to form sumbit button and get the userinput and save it to the variable userGuess.
document.getElementById("word").innerHTML;




// a function to prompt the user to guess the word.

function getWord () {
    const userGuess = (prompt("Enter your guess in the input box. (5 Letter word, no spaces please.)")).toUpperCase();
    return userGuess
}

// a function to randomly select a word from the WORDLE_DICTIONARY for the current session.     -COMPLETED-

function selectWord () {
    const num =  Math.floor(Math.random() * WORDLE_DICTIONARY.length)
    const word = WORDLE_DICTIONARY[num];
    return word;
}


// Main function to run the game;
function runGame () {
    let userGuess = (document.getElementById("inputbox").value).toUpperCase();
    let word = selectWord();
    // let userGuess = (prompt("Enter your guess in the input box. (5 Letter word, no spaces please.)")).toUpperCase();
    while (!(userGuess === word)) {
        userGuess = getWord();
        if (userGuess === word) {
            continue;
        }
        alert("Please try again!")
    }
    alert("Correct! You have got the right answer!");
}


runGame();




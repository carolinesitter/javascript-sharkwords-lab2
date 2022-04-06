const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

let numWrong = 0;

// Loop over the chars in `word` and create divs.
//

const createDivsForChars = (word) => {
  const wordContainer = document.querySelector('#word-container');
  for (const letter of word) {
    wordContainer.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in `ALPHABET` and generate buttons.
//
const generateLetterButtons = () => {
  const letterButtonContainer = document.querySelector('#letter-buttons');
  for (const char of ALPHABET) {
    letterButtonContainer.insertAdjacentHTML('beforeend', `<button>${char}</button>`);
    // querySelector('#').addEventListener('click', disableLetterButton=> {
    //   const letter = button.innerHTML;
    // });
  }
};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  buttonEl.disabled = true;
};

const disableAllLetterButtons = () => {
  const buttons = document.querySelectorAll('button');

// Return `true` if `letter` is in the word.
//
const isLetterInWord = (letter) => document.querySelector(`div.${letter}`) !== null;

// Called when `letter` is in word. Update contents of divs with `letter`.
//
const handleCorrectGuess = (letter, word) => {
  
  
  // display letter at correct location in div
  // event handlers for alphabet
  // put together the click handlers/buttons
  // listeners for those letters
  // if they guess correctly, update letters in word and show correct letters
  //first check if letter is in word
  // if yes, call handlecorrect guess which will loop over letter in word
  // and return correct letters/values


// add event listener for button 
  

  
  // assign a variable to grab all divs
  const allDivs = document.querySelectorAll(`div.${letter}`);

  // loop through divs and check if div equals letter
    for (const div of allDivs) {
      if (word[letter]) {
        div.innerHTML = letter;
        correctGuesses += 1;
      }
      if (correctGuesses === word.length) {

      } disableAllLetterButtons();
      document.querySelector('#win').style.display = 'block';
      }
};

//
// Called when `letter` is not in word.
//
// Increment `numWrong` and update the shark image.
// If the shark gets the person (5 wrong guesses), disable
// all buttons and show the "play again" message.

const handleWrongGuess = () => {
  numWrong += 1;

  //can format document like this
  document
    .querySelector('#shark-img img')
    //display how many guesses you have wrong
    .setAttribute('src', `/static/images/guess${numWrong}.png`);

  if (numWrong === 5) {
    // also disable buttons to end game
    disableAllLetterButtons();
    // ask if they want to play again
    document.querySelector('#play-again').style.display = 'block';
  }
};

//  Reset game state. Called before restarting the game.
const resetGame = () => {
  window.location = '/sharkwords';
};

// This is like if __name__ == '__main__' in Python
//
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  const buttons = document.querySelectorAll('button');
  // add an event handler to handle clicking on a letter button

  // running through each button to create event listener
  for (const button of buttons) {
    button.addEventListener('click', (evt) => {
      // create a variable for clickedBtn which is event target
      // whatever button they click becomes the clicked button
      const clickedBtn = evt.target; // you can also use button to access this element
      // when that happens, disable clickedBtn
      disableLetterButton(clickedBtn);

      // assign variable letter to pull out value of clicked button object element
      const letter = clickedBtn.innerHTML;

      // if letter is in word is true or not
      if (isLetterInWord(letter)) {
        handleCorrectGuess(letter, word);
      } else {
        handleWrongGuess();
      }
    });
  }
  // add an event handler to handle clicking on the Play Again button 
  document.querySelector('#play-again').addEventListener('click', resetGame);
  // add event handler to handle clicking on win and resetting game 
  document.querySelector('#win').addEventListener('click', resetGame);

})();

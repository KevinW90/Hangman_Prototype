const alphabet = [...'qwertyuiopasdfghjklzxcvbnm'];
const phrase = [...'Lorem ipsum'];

Setup = () => {
  PrintKeyboard();
  PrintPhrase();
}

PrintKeyboard = () => {
  let guessed;
  for (let i = 0; i < alphabet.length; i++) {
    switch (alphabet[i]) {
      case "l":
      case "o":
      case "r":
      case "m":
      case "d":
      case "b":
      case "a":
        guessed = "guessed"; break;
      default: guessed = "";
    }

    if (i < 10) {
      $('.key-row1').append('<div class="key ' + guessed + '">' + alphabet[i] + '</div>');
    } else if (i < 19) {
      $('.key-row2').append('<div class="key ' + guessed + '">' + alphabet[i] + '</div>');
    } else {
      $('.key-row3').append('<div class="key ' + guessed + '">' + alphabet[i] + '</div>');
    }
  }
}

PrintPhrase = () => {
  let wordCounter = 1;
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== ' ') {
      if (i == 0 || i == 1 || i == 2 || i == 4 || i == 10) {
        $('.word-area').append('<div class="letter-box char">' + phrase[i] + '</div>');
      } else {
        $('.word-area').append('<div class="letter-box char"></div>');
      }
    } else {
      $('.word-area').append('<div class="letter-box space"></div>');
    }
  }
}


$(document).ready( () => {
  Setup();
})
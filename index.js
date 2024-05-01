/* draw random image for left dice */
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute('src', randomImageSource);

/* draw random image for right dice */
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage02 = "images/dice" + randomNumber2 + ".png"

document.querySelectorAll("img")[1].setAttribute('src', randomDiceImage02);

/* change the text in h1 */
if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = "It's a DRAW! We''ll see what happens next game😉";
} 
else if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "the WINNER goes to Player 1!😜";
}
else {
  document.querySelector('h1').innerHTML = "the WINNER goes to Player 2!😜";
}

/* Sample Code
if (randomNumber1 === randomNumber2) {
  document.querySelector('h1').innerHTML = "It's a DRAW! We''ll see what happens next game😉";
} 
else if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = "the WINNER goes to Player 1!😜";
}
else {
  document.querySelector('h1').innerHTML = "the WINNER goes to Player 2!😜";
}
*/
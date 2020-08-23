document.querySelector('button').addEventListener('click',dice);   /*bina bracket ke function ka name likhte hai*/




function dice() {

var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomimage = 'images/' + 'dice' + randomNumber1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src',randomimage);

/* second image ke liye*/

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomimage2 = 'images/' + 'dice' + randomNumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src',randomimage2);

/*name print ke liye*/


if (randomNumber1>randomNumber2){
  document.querySelector('h1').textContent='😎  Player 1 Wins!'
}

else if (randomNumber1<randomNumber2){
  document.querySelector('h1').textContent='😎  Player 2 Wins!'
}

else if (randomNumber1===randomNumber2){
  document.querySelector('h1').textContent='😂  Draw!'
}

}

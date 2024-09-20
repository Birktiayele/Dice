//Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a 
//random number between 1 and 6. Test it out in the console to make sure it works as expected.

var randomNumber1 =  Math.floor(Math.random() * 6) +1;
var image1 = document.querySelector('.img1');
image1.src = '/images/dice' + randomNumber1 + '.png';

var randomNumber2 =  Math.floor(Math.random() * 6) +1;
var image2 = document.querySelector('.img2');
image2.src = '/images/dice' + randomNumber2 + '.png';

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}else{
    document.querySelector("h1").innerHTML = "Draw";
}
var randomNumber1=Math.floor(Math.random()*6)+1;

var diceString1="images/dice"+randomNumber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceString1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var diceString2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",diceString2);

if (randomNumber1>randomNumber2)
{
  document.querySelector("h1").textContent="Player1 wins😀";
}
else if (randomNumber1<randomNumber2)
{
  document.querySelector("h1").textContent="Player2 wins😀";
}
else
{
  document.querySelector("h1").textContent="Draw";
}

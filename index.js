var dice1= Math.random()*6+1;
dice1=Math.floor(dice1);
var img1= "images/dice"+dice1+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",img1);


///dice22
var dice2= Math.random()*6+1;
dice2=Math.floor(dice2);
var img2= "images/dice"+dice2+".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",img2);

if(dice1>dice2){
  document.querySelector("h1").innerHTML="player1 wins🎉";
}else if(dice2>dice1){
  document.querySelector("h1").innerHTML="player2 wins🎉";
}else{
  document.querySelector("h1").innerHTML="match draw";
}
var randomNumber1=Math.floor((Math.random()*6)+1); //Will generate random number bw 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png" //dice1.png -dice6.png

var randomImageSource= "images/"+ randomDiceImage; // /images.dice1.png -/images.dice6.png

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// for 2nd DICE

 var randomNumber2 = Math.floor((Math.random()*6)+1);

 var randomImage= "images/dice" + randomNumber2 + ".png"

var image2=document.querySelectorAll("img")[1].setAttribute("src",randomImage);


if(randomNumber1>randomNumber2){
	document.querySelector("h1").innerHTML="🚩Player 1  Wins";
}
else if(randomNumber1<randomNumber2){

	document.querySelector("h1").innerHTML="🚩Player 2  Wins";
}

else{
	document.querySelector("h1").innerHTML="😦Draw";
	}
	

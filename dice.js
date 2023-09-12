const dice = document.getElementById('dice-btn');

function diceGame() {
	//dice 1
	var randomDice = Math.floor((Math.random() * 6) + 1);
	var diceLocation = "image/" + "dice-" + randomDice + ".png";
	var image1 = document.querySelectorAll("img")[0];
	image1.setAttribute("src", diceLocation);
	
	//dice 2
	var randomDice2 = Math.floor((Math.random() * 6) + 1);
	var diceLocation2 = "image/" + "dice-" + randomDice2 + ".png";
	var image2 = document.querySelectorAll("img")[1];
	image2.setAttribute("src", diceLocation2);

	if (randomDice > randomDice2) {
		document.querySelector("h1").innerHTML = "  Player 1 Win !";
	}
	else if (randomDice < randomDice2) {
		document.querySelector("h1").innerHTML = "Player 2 Win !  ";
	}
	else if (randomDice = randomDice2) {
		document.querySelector("h1").innerHTML = "; Draw! ";
	}
	else {
		document.querySelector("h1").innerHTML = "Something Error!"
	}
	dice.innerHTML = "Play Again"
}
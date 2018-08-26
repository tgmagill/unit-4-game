$(document).ready(function() {
	var redNum = 0;
	var blueNum = 0; 
	var greenNum = 0;
	var diamondNum = 0;
	var playerScore = 0;
	var computerScore =0;
	var wins = 0;
	var losses = 0;

	function randomNumberForGems() {
		return (Math.floor(Math.random() * 11) + 1);
	}

	function randomNumberForComputer() {
		return (Math.floor(Math.random() * 102) + 18);
	}

	function displayScore(wins, losses, result) {
		console.log("Display Score: " + wins + "," + losses + "," + result);
		$("#wins-text").text(wins);
		$("#losses-text").text(losses);
		$("#result-text").html(result);
	}

	function displayComputerScore() {
		console.log("Random: " + computerScore);
		$("#comp-random-num").text(computerScore);
	}

	function resetValues() {
		redNum = randomNumberForGems();
		blueNum = randomNumberForGems();
		greenNum = randomNumberForGems();
		diamondNum = randomNumberForGems();
		computerScore = randomNumberForComputer();
		playerScore = 0;
		$("#comp-random-num").text(computerScore);
		$("#score-text").text(playerScore);
	}

	function gemClickFunction (gemType) {

		var gameOver = false;
		var result = "";

		switch (gemType) {
			case "red":
				console.log("Gem Clicked: " + gemType);
				playerScore += redNum;
				break;
			case "blue":
				console.log("Gem Clicked: " + gemType);
				playerScore += blueNum;
				break;
			case "diamond":
				console.log("Gem Clicked: " + gemType);
				playerScore += diamondNum;
				break;
			case "green":
				console.log("Gem Clicked: " + gemType);
				playerScore += greenNum;
				break;
		}
		
		console.log("playerScore: " + playerScore);
		if (playerScore == computerScore) {
			wins++;
			gameOver = true;
			result = "Congrats you Won!"
		} else if (playerScore > computerScore) {
			losses++;
			gameOver = true;
			result = "Sorry you Lost!"
		} else {
			$("#score-text").text(playerScore);
		}

		if (gameOver) {
			displayScore(wins, losses, result);
			resetValues();
			$("#comp-random-num").text(computerScore);
			$("#score-text").text("0");
		}
	}

	function playGame() {

		displayScore(0, 0, "   ");
		resetValues();

		$("#red-gem").click(function() { gemClickFunction("red");});
		$("#blue-gem").click(function() { gemClickFunction("blue");});
		$("#diamond-gem").click(function() { gemClickFunction("diamond");});
		$("#green-gem").click(function() { gemClickFunction("green");});
	}

	playGame();
});

// Initialized Scores
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Get Computer Choice
function getComputerChoice() {
	const computerChoice = Math.random();
	if (computerChoice < 0.34) {
		return 'Rock';
	} else if (computerChoice <= 0.67) {
		return 'Paper';
	} else {
		return 'Scissors';
	}
}

// Get Player Choice
function getPlayerChoice() {
	const playerChoice = prompt('Choose Rock, Paper or Scissors: ').toLowerCase();
	if (
		playerChoice === 'rock' ||
		playerChoice === 'paper' ||
		playerChoice === 'scissors'
	) {
		return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1); // Capitalize first letter
	} else {
		alert('Sorry, Invalid Option! Please try again...');
		return getPlayerChoice(); // Recursively prompt until valid choice is made
	}
}

// Check the Winner
function checkWinner(player, computer) {
	if (player === computer) {
		drawScore++;
		return 'Draw!';
	} else if (player === 'Rock') {
		if (computer === 'Paper') {
			computerScore++;
			return 'Computer';
		} else {
			playerScore++;
			return 'Player';
		}
	} else if (player === 'Paper') {
		if (computer === 'Scissors') {
			computerScore++;
			return 'Computer';
		} else {
			playerScore++;
			return 'Player';
		}
	} else if (player === 'Scissors') {
		if (computer === 'Rock') {
			computerScore++;
			return 'Computer';
		} else {
			playerScore++;
			return 'Player';
		}
	}
}

// Gameplay Functionality
function playGame() {
	while (playerScore < 5 && computerScore < 5) {
		const computerChoice = getComputerChoice();
		const playerChoice = getPlayerChoice();
		const winner = checkWinner(playerChoice, computerChoice);

		alert(
			`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nWinner: ${winner}\nYour score: ${playerScore}\nComputer score: ${computerScore}\nDraw Score: ${drawScore}`
		);
	}

	// Declare the final winner
	if (playerScore === 5) {
		alert('Congratulations! You reached 5 points. You won the game!');
	} else {
		alert('Computer reached 5 points. You lost the game!');
	}
}

// Start the game
playGame();

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
		return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
	} else {
		alert('Sorry, Invalid Option! Please try again...');
		return getPlayerChoice();
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

	if (playerScore === 5) {
		alert('Congratulations! You reached out 5 points.. You won the game!');
	} else if (drawScore === 5) {
		alert(`It's a big DRAW!!!`);
	} else {
		alert('Computer reached out 5 points.. You lost the game!');
	}
}

playGame();

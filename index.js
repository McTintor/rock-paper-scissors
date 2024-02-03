let userScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Determine the winner of the round
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        return `You win! ${userChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${userChoice}.`;
    }
}

function updateScore() {
    document.getElementById("result").innerHTML = `Round ${rounds + 1}: User ${userScore} - ${computerScore} Computer`;
}

function updateWinLoseText(text) {
    document.getElementById("win-lose-text").innerHTML = text;
}

function showRestartButton() {
    document.getElementById("restart").style.display = "block";
}

function hideRestartButton() {
    document.getElementById("restart").style.display = "none";
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    rounds = 0;
    updateScore();
    updateWinLoseText("");
    hideRestartButton();
}

function endGame() {
    if (userScore > computerScore) {
        updateWinLoseText("Congratulations! You win!");
    } else if (userScore < computerScore) {
        updateWinLoseText("Sorry! You lose. Try again!");
    } else {
        updateWinLoseText("It's a tie. Play again!");
    }
    showRestartButton();
}

document.getElementById("rock").addEventListener("click", function() {
    if (rounds < 5) {
        const result = playRound("rock");
        updateWinLoseText(result);
        rounds++;
        updateScore();

        if (rounds === 5) {
            endGame();
        }
    }
});

document.getElementById("paper").addEventListener("click", function() {
    if (rounds < 5) {
        const result = playRound("paper");
        updateWinLoseText(result);
        rounds++;
        updateScore();

        if (rounds === 5) {
            endGame();
        }
    }
});

document.getElementById("scissors").addEventListener("click", function() {
    if (rounds < 5) {
        const result = playRound("scissors");
        updateWinLoseText(result);
        rounds++;
        updateScore();

        if (rounds === 5) {
            endGame();
        }
    }
});

document.getElementById("restart").addEventListener("click", function() {
    resetGame();
});

// Initial score update
updateScore();

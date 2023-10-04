let player1Position = 0;
let player2Position = 0;
const trackLength = 11;

function movePlayer(player) {
    const raceElement = document.getElementById(`${player}-race`);
    console.log(raceElement);
    if (raceElement) {
        const currentPosition = player === 'player1' ? player1Position : player2Position;
        const newPosition = currentPosition + 1;

        if (newPosition >= trackLength) {
            announceWinner(player);
            return;
        }
        const currentCell = raceElement.children[currentPosition];
        if (currentCell) {
            currentCell.classList.remove('active');
        }
        const nextCell = raceElement.children[newPosition];
        if (nextCell) {
            nextCell.classList.add('active');
        }

        // Update the player's position
        if (player === 'player1') {
            player1Position = newPosition;
        } else {
            player2Position = newPosition;
        }
    }
}

function handleKeyPress(event) {
    if (event.key === 'a') {
        movePlayer('player1');
    }
    if (event.key === 's') {
        movePlayer('player2');
    }
}
function initializeGame() {
    window.addEventListener('keyup', handleKeyPress);
}

function announceWinner(player) {
    alert(`Player ${player} wins the race!`);
}

initializeGame();

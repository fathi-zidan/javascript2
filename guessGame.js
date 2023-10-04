const secUpdate = document.getElementById('update');
const input = document.getElementById('keys');
const h2 = document.querySelector('h2 span');
let guessedLetters = []; // Store guessed letters

function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

let goal = getRandomLetter();
console.log(goal);

window.addEventListener('keypress', (e) => {
    const key = e.key.toLowerCase();
    guessedLetters.push(key);

    if (key === goal) {
        showMessage("Right letter", "green");
        const btn = document.createElement('button');
        btn.innerText = 'Play Again';
        h2.innerText = goal;
        btn.addEventListener('click', () => {
            goal = getRandomLetter();
            console.log(goal);
            guessedLetters = []; // Reset guessed letters
            secUpdate.innerText = '';
            input.value =''
            h2.innerText = '?';
        });
        secUpdate.appendChild(btn);
    } else {
        showMessage("Nope, Wrong Letter!", "red");
    }
});

function showMessage(message, color) {
    secUpdate.innerText = message;
    secUpdate.style.color = color;
    input.value = guessedLetters.join(', '); 
}

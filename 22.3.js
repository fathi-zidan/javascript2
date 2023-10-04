const secUpdate = document.getElementById('update');
const input = document.getElementById('keys');
const h2 = document.querySelector('h2 span');
function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

let goal = getRandomLetter();
console.log(goal);

input.addEventListener('input', (e) => {
    let keys = e.target.value.toLowerCase();
    const char = keys.split('');
    // console.log(keys)
    // console.log(char)
    for (let i = 0; i < char.length; i++) {
        if (char[i] === goal) {
            secUpdate.innerText = 'Right Letter!';
            secUpdate.style.color = 'green'
            const btn = document.createElement('button');
            btn.innerText = 'Play Again';
            h2.innerText = goal;
            btn.addEventListener('click', () => {
                goal = getRandomLetter();
                console.log(goal);
                input.value = '';
                secUpdate.innerText = '';
                h2.innerText = '?'
            });
            secUpdate.appendChild(btn);

        } else {
            secUpdate.innerText = 'Nope,Wrong Letter!';
            secUpdate.style.color = 'red'
        }
    }
});
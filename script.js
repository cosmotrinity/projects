let randomNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

document.getElementById("submit").addEventListener("click", checkGuess);

function checkGuess() {
    let userGuess = document.getElementById("guess").value;
    count++;
    if (userGuess == randomNumber) {
        document.getElementById("result").innerHTML = `Congratulations! You guessed the number in ${count} attempts.`;
    } else if (userGuess < randomNumber) {
        document.getElementById("result").innerHTML = `Your guess is too low. Try again!`;
    } else {
        document.getElementById("result").innerHTML = `Your guess is too high. Try again!`;
    }
    document.getElementById("count").innerHTML = `Attempts: ${count}`;
}
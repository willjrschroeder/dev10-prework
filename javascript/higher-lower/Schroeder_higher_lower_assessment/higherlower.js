let n = document.getElementById("N");
let maximum;
let keep_going = true;

while(keep_going == true) { // input valiation loop
    maximum = Number(prompt("What should the maximum number be?"));
    if(!isNaN(maximum) && maximum > 0){ // breaks if the number is valid
        keep_going = false;
        maximum = Math.round(maximum);
    }
}

n.innerHTML = maximum; // updates HTML on the page to display the maximum number

let num = Math.floor(Math.random() * maximum) + 1; // generates the random number

let guesses = [];

function do_guess() {
    let guess = Number(document.getElementById("guess").value);
    let message = document.getElementById("message");

    if(isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    }
    else if(guess > maximum || guess < 1){
        message.innerHTML = "That number is not in range, try again."
    }
    else if(guesses.includes(guess)) {
        message.innerHTML = "You have already guessed that number!"
    }
    else if(guess == num) {
        guesses.push(guess);
        message.innerHTML = `You got it! It took you ${guesses.length} tries and your guesses were ${guesses.join(", ")}.`;
    }
    else if (guess > num) {
        guesses.push(guess);
        message.innerHTML = "No, try a lower number.";
    }
    else {
        guesses.push(guess);
        message.innerHTML = "No, try a higher number.";
    }
}
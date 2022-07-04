let guess, result;

function make_guess(guess) { // returns heads or tails with 50% odds
    let result = Math.round(Math.random());
    if(result === 1) {
        result = "heads";
    } 
    else {
        result = "tails";
    }

    return result;
}

function log_results(result, guess) {
    let opposite_guess;
    if(guess === "heads") {
        opposite_guess = "tails";
    }
    else {
        opposite_guess = "heads";
    }

    let body = document.body;
    let p1 = document.createElement("p");
    p1.classList.add("p1");
    p1.innerHTML = `You guessed ${guess}...`;
    body.appendChild(p1); // outputs the user's guess

    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p2.classList.add("p2");
    p3.classList.add("p3");

    if(guess === result){
        p2.innerHTML = `The coin flips and comes up ${result}!`;
        p3.innerHTML = "Good guess!";
    }
    else {
        p2.innerHTML = `The coin flips and comes up ${opposite_guess}!`;
        p3.innerHTML = "Sorry!";
    }
    body.appendChild(p2);
    body.appendChild(p3);
}

function heads_pressed(){
    guess = "heads";
    result = make_guess(guess);
    console.log(result);
    log_results(result, guess);
}

function tails_pressed(){
    guess = "tails"
    result = make_guess(guess);
    console.log(result);
    log_results(result, guess);
}


function get_number(prompt) {
    let keep_going = true;
    let input, num_rolls;

    while (keep_going === true) {
        input = window.prompt(prompt);
        num_rolls = Number(input);

        if(num_rolls != NaN && num_rolls > 0) {
            keep_going = false;
        }
    }
   return num_rolls; 
} 

function init_rolls(){
    let rolls = [];
    for(let i = 0; i < 11; i++){
        rolls.push(0);
    }
    return rolls;
}

function roll_dice(number_of_rolls) {
    let firstDie, secondDie, sum;
    let results = init_rolls();
    
    for(let i = 0; i < number_of_rolls; i++) {
        firstDie = Math.floor(Math.random() * 6) + 1;
        secondDie = Math.floor(Math.random() * 6 + 1);
        sum = firstDie + secondDie;

        results[sum - 2] += 1
    }
    return results;
}

function log_results(num_rolls, results) {
    console.log(`We rolled the dice ${num_rolls} times...`)
    for(let i = 0; i < results.length; i++) {
        let num = i+2;
        let count = results[i];
        let pct = count / num_rolls * 100;

        console.log(`${num} was rolled ${count} times (${pct}%)`);
    }
}
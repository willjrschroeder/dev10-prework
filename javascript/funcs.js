function get_number(prompt) {
    let valid_input = false;
    let num_rolls, input;

    while(!valid_input) {
        input = window.prompt(prompt);

        num_rolls = Number(input);

        if(num_rolls != NaN && num_rolls > 0) {
            valid_input = true;
        }
    }

    return num_rolls;
}

function init_rolls() {
    let rolls = []
    for(let i = 0; i < 11; i++) {
        rolls.push(0);
    }

    return rolls;
}

function roll_dice(num_rolls) {
    let rolls = init_rolls();

    let die1, die2, roll;

    for(let i = 0; i < num_rolls; i++) {
        // roll dice
        die1 = Math.floor(Math.random() * 6) + 1;
        die2 = Math.floor(Math.random() * 6) + 1;

        roll = die1 + die2;
        // add one to count at the right index for the roll (-2)
        rolls[roll-2]++;
    }

    return rolls;
}

function log_results(num_rolls, rolls, table) {
    let head = table.getElementsByTagName("thead")[0];
    let body = table.getElementsByTagName("tbody")[0];

    let caption = document.createElement("caption");
    caption.innerText = `We rolled the dice ${num_rolls} times...`;
    caption.style = "caption-side: top;";

    table.insertBefore(caption, head);

    for(let i = 0; i < rolls.length; i++) {
        let num = i+2;
        let count = rolls[i];
        let pct = Math.round(count / num_rolls * 100);

        let row = document.createElement("tr");

        let row2Col1 = document.createElement("td");
        row2Col1.innerHTML = `${num}`;
        let row2Col2 = document.createElement("td");
        row2Col2.innerHTML = `${count}`;
        let row2Col3 = document.createElement("td");
        row2Col3.innerHTML = `${pct}%`

        body.appendChild(row);
        body.appendChild(row2Col1);
        body.appendChild(row2Col2);
        body.appendChild(row2Col3);
    }
}
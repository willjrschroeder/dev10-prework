/*
Let's use everything we've learned so far to create a dice 
simulator that rolls two dice and keeps track of the count 
and calculates the percent of each rolled number.

We will prompt the user for a number of times to roll the dice, 
then print the stats to the console displaying the number of times 
each number came up and what % of the total rolls that count was.

Problem: Given a user input, roll two dice x number of times and store 
the summed result of the two die after each roll.

Then, output to the console the number of times each sum occured and 
what the percentage of total roles that was.

Validate the input to ensure it is a non-negative integer

Input: non-negative integer
Output: String containing statistics

Examples/Edge cases:
Input of 0 should return "The die were rolled 0 times, and there are no 
statistics to report"

2 -> 
"Sums of die rolls: 
(sum1) - (%1) of total occurences
(sum2) - (%2) of total occurences"

Data structures:
Map to store the sums and the percentage of total occurences
Intermediate array to store the sums

Algorithm:

Validation while loop
    Ask the user for input integer

Call function to roll the dice, returns a map of the results

Loop map.length # of times
    Output the result, calculating the percentages

** dice_roller function
Create variables to store the first_die and second_die results
Create array to store the final results

Loop input # of times
    Roll die 1 and die 2 and sum the result
    Store the sum in the sums array

sort the sums array by sum size

create a map containing sums and percentage of total occurences
return the map
**

*/

function dice_roller(number_of_rolls) {
    let firstDie = 0; //Create variables to store the firstDie and secondDie results
    let secondDie = 0;
    let rollSums = []; //Create array to store sums
    let finalResults = new Map(); //map to store final results

    for (let i = 0; i <= number_of_rolls - 1; i++){ //Loop input # of times
        firstDie = Math.floor(Math.random() * 6) + 1; //Roll die 1 and die 2 and sum the result
        secondDie = Math.floor(Math.random() * 6) + 1;
        rollSums.push(firstDie + secondDie);
    }

    rollSums.sort();//sort the sums array
    console.log(rollSums);
    let rollSumsUnique = rollSums.filter(onlyUnique); // create a unique sums array
    console.log(rollSumsUnique);
    // create a map containing unique sums and percentage of total occurences
    for (let i = 0; i <= rollSumsUnique.length - 1; i++){ // iterate through the unique array and count the number of occurences of each value in the original array
        let count = 0;
        for (let j = 0; j < rollSums.length - 1; j++){
            if (rollSums[j] === rollSumsUnique[i]) {
                count++;
            }
        }
        finalResults.set(rollSumsUnique[i], (count / number_of_rolls) * 100);
    }

    return finalResults;
}

function onlyUnique(value, index, self) { // used in conjunction with filter function to return a unique array
    return self.indexOf(value) === index;
  }

let keep_going = true;
let input;
while (keep_going == true) { // Validation while loop
    input = window.prompt("How many dice rolls should we make?") //Ask the user for input integer
    input = Number(input);
    if(input != NaN && input > 0){
        keep_going = false;
    }
}

let result = dice_roller(input); //Call function to roll the dice

console.log(`The dice were rolled ${input} times. Below are the results of the two rolls summed`); //output results
console.log(result);
result.forEach((value, key) => {
    console.log(`${key}: ${value}% of total occurences`); //Output the result, calculating percentages
})

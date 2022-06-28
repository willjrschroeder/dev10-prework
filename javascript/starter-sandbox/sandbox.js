console.log("Hello, world");

let y = 8;
let x = 7;
let z = 2;

let str = "Hi there";

console.log(str.substring(2, 5));
console.log(str.substr(1, 1));
console.log(str.slice(2, 5));

console.log(str.replace("lo", "p"));

let tester = "Hi there my name is Will"
console.log(tester.replace(" ", "-"));

console.log(tester.split(" ").join("-"));

console.log(Math.floor(Math.random() * 10) + 1);

let val = Math.floor(Math.random() * 10) + 1;

if ((val > 5 && val < 10) && val % 3 === 0) {
    console.log(val);
    console.log(`${val} is 9.`);
}

let value = 0

while (value != 1) {
    value = Math.floor(Math.random() * 6) + 1;
    console.log(`Your value is ${value}`);
    if (value != 1){
        console.log("rolling...");
    }
}

for (let i = 0; i <= 2; i++) {
    console.log(i);
}

for (i = 0; i < str.length; i++){
    console.log(str.charAt(i));
}

for (i = str.length - 1; i >= 0; i--){
    console.log(str.charAt(i));
}

arr = [1,2,3];
arr2= [4,5,6];

console.log(arr.indexOf(4));

console.log(arr.shift());

console.log(arr);

console.log(arr + arr2);

console.log(arr.concat(arr2));

console.log(arr);

for (let i = 0; i < arr.concat(arr2).length; i++){
    console.log(arr.concat(arr2)[i]); //prints each index of arr and arr2 concatonated together without mutating arr
}

for (let i = arr.length - 1; i >= 0; i-- ){
    console.log(arr[i]);
}
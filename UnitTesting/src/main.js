// Henna Kekola
// 27.1.2026
// Demonstrates basic arithmetic operations (add, subtract, multiply, divide)
// using functions imported from mylib.js
// Example for Mocha + Chai unit testing.


// Main program
console.log("main.js starting");
// Import the four functions from the mylib.js module
const { add, subtract, multiply, divide } =  require("./mylib.js");

//Testattu laskujen toimivuus
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
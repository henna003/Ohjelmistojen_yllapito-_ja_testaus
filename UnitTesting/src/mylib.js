
// basic arithmetic operations

// addition
function add(a, b) {
    return a + b;
}

//subtract
function subtract(a, b) {
    return a - b;
}

// multiply
function multiply(a, b) {
    return a * b;
}

//divide
function divide(a, b) {
    if (b === 0) {
        throw new Error("ZeroDivision"); // throws an error if division by zero
    }
    return a / b;
}

// Exports arithmetic functions for use in other modules
module.exports = {
    add, 
    subtract,
    multiply,
    divide
};
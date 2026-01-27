
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
        throw new Error("Zerodivision");
    }
    return a / b;
}

// Export arithmetic functions for use in other modules
module.exports = {
    add, 
    subtract,
    multiply,
    divide
};
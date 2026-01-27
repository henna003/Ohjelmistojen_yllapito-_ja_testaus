// Unit tests for the mylib.js module.
// Tests basic arithmetic operations (ass, subtract, multiply, divide)
// And verifies that division by zero throws an error.

// Import Chai's expect function for assertions
const {expect} = require("chai");

// Import the arithmetic functions to be tested
const { add, subtract, multiply, divide } = require("../src/mylib");

// Test suite for the mylib arithmetic functions
describe("mylib.js (basic arithmetic operations)", () => {
    // Runs once before all tests
    before (() => {
        console.log("Testing is starting.");
    });

    // Runs after all tests
    after(() => {
        console.log("Testing is ending.")
    });

    // Test for add function
    it("add is working right", () => {
        expect(add(2, 3)).to.equal(5);
    });

    // Test for subtract function
    it("subtract is working right", () => {
        expect(subtract(5, 3)).to.equal(2);
    });

    // Test for multiply function
    it("multiply is working right", () => {
        expect(multiply(2, 4)).to.equal(8);
    });

    // Test for divide function
    it("divide is working right", () => {
        expect(divide(6, 3)).to.equal(2);
    });

    // Test for division by zero (error handling)
    it("divide bt zero should throw error", () => {
        expect(() => divide(5, 0)).to.throw("ZeroDivision");
    });

});


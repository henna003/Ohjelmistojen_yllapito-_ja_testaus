// Import he 'expect' assertion function from chai
const { expect } = require("chai");
// Import the hexToRgb function from math.js
const { hexToRgb } = require("../src/math");

// Describe the test suite for math.js
describe("math.js", () => {
    // Describe the specific function hexToRgb
    describe("hexToRgb", () => {
        it("converts hex to rgb", () => {
            // Call hexToRgb with the hex color "#ff0000"
            // Assert that the result matches the expected RGB object
        expect(hexToRgb("#ff0000")).to.deep.equal({ r: 255, g: 0, b: 0});
        });

    });
});
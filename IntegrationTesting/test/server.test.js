// Import Supertest for HTTP testing and Chai's expect for assertions
const request = require("supertest");
const expect = require("chai").expect;

// Set the environment to "test" so the server doesn't actuallyt start listening
process.env.NODE_ENV = "test";
// Import the Express app from server.js
const app = require("../src/server");

//Describe the test suite for the Math API
describe("Math API", () => {
    // Individual test case:  GET /hex-to-rgb should return correct RGB
    it("GET /hex-to-rgb returns rgb", async () => {
        // Make a GET request to /hex-to-rgb with query parameter hex=#00ff00
        const res = await request(app)
            .get("/hex-to-rgb")
            .query({ hex: "#00ff00"});

            // Asset that the response body matches the expected RGB object
            expect(res.status).to.equal(200);
            expect(res.body).to.deep.equal({
                r: 0,
                g: 255,
                b: 0
            });

    });
    
});
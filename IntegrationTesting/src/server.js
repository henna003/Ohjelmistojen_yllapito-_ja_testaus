// Import express library
const express = require("express");

// Import hexToRgb-function from math.js -module
const { hexToRgb } = require("./math");

// Create new Express application
const app = express();

// Define the port on which the server will listen
const port = 3001;

// Returns JSON-object, with r, g ja b values
// Example in postman http://localhost:3001/hex-to-rgb?hex=ff8800
// Response: {"r":255,"g":136,"b":0}

app.get("/hex-to-rgb", (req, res) => {
    // Get the 'hex' parameter from the query string
    const { hex } = req.query;
    // If the hex parameter is missing, return HTTP 400 Bad Request
    if (!hex) {
        return res.status(400).send("hex parameter missing");
    }
    //Convert the hex value to rgb
    const rgb = hexToRgb(hex)
    //Return the result as JSON
    res.json(rgb);
});

// Start the server only if NODE_ENV is not 'test'
// This allows Supertest unit tests to run without opening a real port
if (process.env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`Server: localhost:${port}`);
    })
}
// Export the app sp tests can use it without opening a real port
module.exports = app;
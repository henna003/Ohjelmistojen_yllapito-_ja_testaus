**REST API with Express**
- API Route hex-to-rgb conversion
- Test hex-to-rgb function (Unit Test)
- Test route (Integration Test)
- Test Rest API with Postman

**server.js**
- Importing hexToRgb-function from math.js -module
- Defining the port on which the server will listen
- Returns JSON-object, with r, g ja b values
- Example in postman http://localhost:3001/hex-to-rgb?hex=ff8800
    Response: {"r":255,"g":136,"b":0}
    Get the 'hex' parameter from the query string
- If the hex parameter is missing, returns HTTP 400 Bad Request
- Converts the hex value to rgb
- Returns the result as JSON
- Starts the server only if NODE_ENV is not 'test'
    This allows Supertest unit tests to run without opening a real port
- Exports the app so tests can use it without opening a real port

**math.js
- Function to calculate hex to rgb

**math.test.js**
- Imports the 'expect' assertion function from chai
- Imports the hexToRgb function from math.js
- Describes the test suite for math.js
- Describes the specific function hexToRgb
- Calls hexToRgb with the hex color "#ff0000
- Asserts that the result matches the expected RGB object

**server.test.js**
- Imports Supertest for HTTP testing and Chai's expect for assertions
- Sets the environment to "test" so the server doesn't actuallyt start listening
- Imports the Express app from server.js
- Describes the test suite for the Math API
- Individual test case:  GET /hex-to-rgb should return correct RGB
- Makes a GET request to /hex-to-rgb with query parameter hex=#00ff00
- Assets that the response body matches the expected RGB object



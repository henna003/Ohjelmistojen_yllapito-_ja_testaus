# TASK 1  Implement Logging library

Creating a Node.js application and integrating Winston into it. Purpose is to allow capturing various events.

## Setup

Initialize a new Node.js project:
- git init
- npm init -y

Install the Winston library as dependency:
- npm install --save winston@3.11.0

## App

logger.js
- Creating a logging configuration to use Winston

main.js
- Implementing logging in to application

## Test

Run the application: 
- node src/main.js
  
Check log files created in the log files: 
- logs/error.log and logs/combined.log

# TASK 2 Creating a tally counter REST API with Express

Creating a tally counter REST API with Express. It exposes three endpoints to read, increment and reset the counter. All the actions and endpoint accesses are logged using Winston.

## Setup

Initialize a new Node.js project:
- git init
- npm init -y

Install the Winston library as dependency:
- npm install --save winston@3.11.0

Install Express:
- npm install express

## App

main.js
-	Creates and configures the Express application
-	Registers middleware
-	Mounts application routes
-	Starts the server
-	Logs ([MAIN Starting, [MAIN] Stopping)

routes.js
-	Handels incoming http requests
-	Logs endpoint access ([ENDPOINT] METHOD ’/path’)
-	Calls the appropriate controller logic from counter.js
-	Returns JSON responses to the client 
         
counter.js 
-	Stores the counter state memory
-	Functions: Read the current count, Increase the count and Reset the count to zero
-	Logs counter operations ([COUNTER] action value) 
         
logger.js
-	Creates a Logging Configuration in the file logger.js
-	Used by all modules (main.js, routes.js, counter.js)

## Test

Test can be made throught Postman or Rest Client.
         
Postman:
1.	Start the server: node src/main.js
2.	Open Postman
3.	Select method GET
4.	Enter the request URL, for example can try the followings:
-	http://localhost:3000/counter-read
-	http://localhost:3000/counter-increase
-	http://localhost:3000/counter-read
-	http://localhost:3000/counter-reset
-	http://localhost:3000/counter-read
5.	The response will be displayed in the terminal
6.	Exit CTRL + C

Rest Client:
1.	Start the server: node src/main.js
2.	Open the rest.http file in VS Code (Download extension rest client)
3.	Choose ”Send request” and the response from the server will be displayed directly in the editor
4.	Exit CTRL + C

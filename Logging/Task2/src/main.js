// Implements logging in to application
const logger = require('./logger');

// Import express library
const express = require("express");

// Import routes
const routes = require('./routes');

// Create new Express application
const app = express();

// Middleware to parse incoming JSON requests into req.body
app.use(express.json());

// Mounts all routes from routes.js at the root path
app.use('/', routes);

// Start server
if (require.main === module) {
    const PORT = 3000;
    logger.info('[MAIN] Starting');
    const server = app.listen(PORT);

// Shutdown with CTRL + C
    process.on('SIGINT', () => {
        logger.info('[MAIN] Stopping');
        server.close(() => process.exit(0))
    });
}


// TASK 1
// logger.log('info', 'This is an informational message.');
// logger.log('warn', 'This is a warning message.');
// logger.log('error', 'This is an error message.');

// logger.info('This is another informational message.');
// logger.warn('This is another warning message.');
// logger.error('This is another error message.');

module.exports = app;
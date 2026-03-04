
// Import logger
const logger = require('./logger');
// Holds integer count state in memory
let count = 0;

// Read and return current count
function read() {
    logger.info(`[COUNTER] read ${count}`)
    return count;
}

//Increase current count by one
function increase() {
    count += 1;
    logger.info(`[COUNTER] increase ${count}`)
    return count;
}

// Zero/reset current count
function reset() {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`)
    return count;
}
// Exports functions for use in other modules
module.exports = {
    read,
    increase,
    reset
};
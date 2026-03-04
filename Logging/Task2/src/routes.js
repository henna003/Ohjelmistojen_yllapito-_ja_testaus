// Import express library
const express = require("express");

// Import counter
const counter = require("./counter");

// Import logger
const logger = require('./logger');

const router = express.Router();

// GET /counter-read
router.get('/counter-read', (req, res) => {
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`)
    const value = counter.read()
    res.json({ count: value });
});

// GET /counter-increase
router.get('/counter-increase', (req, res) => {
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`)
    const value = counter.increase()
    res.json({ count: value });
});

// GET /counter-reset
router.get('/counter-reset', (req, res) => {
    logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`)
    const value = counter.reset()
    res.json({ count: value });
});

// app.get('/', (req, res) => {
//     res.send('Hello world!');
// }); //testi

module.exports = router;
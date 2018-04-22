const express = require('express');

const router = express.Router();
const controller = require('../controllers');

console.log(controller);

// Home
router.get('/', controller.category);

module.exports = router;
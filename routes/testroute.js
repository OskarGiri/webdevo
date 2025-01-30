//  Import the express library
const express = require('express')
const router = express.router();

const testConnection = require('../controllers/testcontroller');

router.post('/create_test', testConnection.createtest);
router.get('/show_test', testConnection.gettest);

module.exports = router;
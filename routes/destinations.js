var express = require('express');
var router = express.Router();

const destinationsCtrl = require('../controllers/flights');

// POST destinations
router.post('/flights/:id/destinations', destinationsCtrl.createDestination);

module.exports = router;

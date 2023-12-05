const express = require ('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

//GET /flights/:id/tickets/now
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// POST /flights/:id/tickets
router.post('/flights/:idtickets', ticketsCtrl.create)




module.exports = router;
const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create: createTicket,
    new: newTicket
  };

async function newTicket(req, res){
    const flight = await Flight.findById(req.params.id);
    console.log(flight);
    res.render('tickets/new', {title: 'title', flight})
}

  function createTicket(req, res) {
    res.redirect('/flights');
  }
  
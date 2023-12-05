const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  show,
  new: newFlight,
  create
};

async function index(req, res) {
  const flights = await Flight.find({});
  res.render('flights/index', { title: 'Flights', flights });
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  console.log(flight)
  const tickets = await Ticket.find({flight:flight._id})
  res.render('flights/show', { title: 'Flight Detail', flight, tickets });
}

function newFlight(req, res) {
  // We'll want to be able to render an  
  // errorMsg if the create action fails
  res.render('flights/new', { title: 'Add Flight', errorMsg: '' });
}

async function create(req, res) {
  try {
    const flight= await Flight.create(req.body);
    console.log(flight);
    res.redirect(`/flights/${flight._id}`);
  } catch(err) {
    console.log(err);
    res.render('flights/new', { errorMsg: err.message });
  }
}

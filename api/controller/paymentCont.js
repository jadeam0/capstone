const express = require('express');
const bodyParser = require('body-parser');
const payRoutes = express.Router();

const Payments = require('../model/payment');
const payment = new Payments();

payRoutes.get('/payments', (req, res) => {
    payment.fetchItems(req, res);
});

payRoutes.get('/payment/:id', (req, res) => {
    payment.fetchItem(req, res);
});

payRoutes.post('/addPayment', bodyParser.json(), (req, res) => {
    payment.addItem(req, res);
});

payRoutes.put('/payment/:id', (req, res) => {
    payment.updateItem(req, res);
});

payRoutes.delete('/payment/:id', (req, res) => {
    payment.deleteItem(req, res);
});

module.exports = payRoutes;
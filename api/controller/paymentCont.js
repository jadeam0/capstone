const express = require('express');
const bodyParser = require('body-parser');
const payRoutes = express.Router();

const {payment} = require('../model/index')

payRoutes.get('/payments', (req, res) => {
    payment.fetchPayments(req, res);
});

payRoutes.get('/payment/:id', (req, res) => {
    payment.fetchPayment(req, res);
});

payRoutes.post('/addPayment', bodyParser.json(), (req, res) => {
    payment.addPayment(req, res);
});

payRoutes.put('/payment/:id', (req, res) => {
    payment.updatePayment(req, res);
});

payRoutes.delete('/payment/:id', (req, res) => {
    payment.deleteItem(req, res);
});

payRoutes.delete('/payment/:id', (req, res) => {
    payment.deleteAllItems(req, res);
});

module.exports = payRoutes;
const express = require('express');
const bodyParser = require('body-parser');
const payRoutes = express.Router();

const {payment} = require('../model/index')

payRoutes.get('/user/:id/payments', (req, res) => {
    payment.fetchPayments(req, res);
});

payRoutes.get('/user/:id/payment/:id', (req, res) => {
    payment.fetchPayment(req, res);
});

payRoutes.post('/user/:id/addPayment', bodyParser.json(), (req, res) => {
    payment.addPayment(req, res);
});

payRoutes.put('/user/:id/payment/:id', (req, res) => {
    payment.updatePayment(req, res);
});

payRoutes.delete('/user/:id/payment/:id', (req, res) => {
    payment.deleteItem(req, res);
});

payRoutes.delete('/user/:id/payment/:id', (req, res) => {
    payment.deleteAllItems(req, res);
});

module.exports = payRoutes;
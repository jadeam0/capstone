const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = express.Router();

const {order} = require('../model/index')

orderRoutes.get('/orders', (req, res) => {
    order.fetchOrders(req, res);
});

orderRoutes.get('/order/:id', (req, res) => {
    order.fetchOrder(req, res);
});

orderRoutes.post('/addOrder', bodyParser.json(), (req, res) => {
    order.addOrder(req, res);
});

orderRoutes.put('/order/:id', (req, res) => {
    order.updateOrder(req, res);
});

orderRoutes.delete('/order/:id', (req, res) => {
    order.deleteOrder(req, res);
});

module.exports = orderRoutes;
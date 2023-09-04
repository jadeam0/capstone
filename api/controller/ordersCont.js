const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = express.Router();

const {order} = require('../model/index')

orderRoutes.get('/user/:id/orders', (req, res) => {
    order.fetchOrders(req, res);
});

orderRoutes.post('/user/:id/addOrder', bodyParser.json(), (req, res) => {
    order.addOrder(req, res);
});

orderRoutes.put('/user/:id/order/:id', (req, res) => {
    order.updateOrder(req, res);
});

orderRoutes.delete('/user/:id/order/:id', (req, res) => {
    order.deleteOrder(req, res);
});

orderRoutes.delete('user/:id/order', (req, res) => {
    order.deleteAllOrders(req, res);
});

module.exports = orderRoutes;
const express = require('express');
const bodyParser = require('body-parser');
const cartRoutes = express.Router();

const {cart} = require('../model/index')

cartRoutes.get('/items', (req, res) => {
    cart.fetchItems(req, res);
});

cartRoutes.get('/item/:id', (req, res) => {
    cart.fetchItem(req, res);
});

cartRoutes.post('/addItem', bodyParser.json(), (req, res) => {
    cart.addItem(req, res);
});

cartRoutes.put('/item/:id', (req, res) => {
    cart.updateItem(req, res);
});

cartRoutes.delete('/item/:id', (req, res) => {
    cart.deleteItem(req, res);
});

module.exports = cartRoutes;
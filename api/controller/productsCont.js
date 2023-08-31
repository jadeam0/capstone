const express = require('express');
const bodyParser = require('body-parser');
const prodRoutes = express.Router();

const {products} = require('../model/index')

prodRoutes.get('/products', (req, res) => {
    products.fetchProducts(req, res);
});

prodRoutes.get('/product/:id', (req, res) => {
    products.fetchProduct(req, res);
});

prodRoutes.post('/addProduct', bodyParser.json(), (req, res) => {
    products.addproduct(req, res);
});

prodRoutes.put('/product/:id', (req, res) => {
    products.updateProduct(req, res);
});

prodRoutes.delete('/product/:id', (req, res) => {
    products.deleteProduct(req, res);
});

module.exports = prodRoutes;
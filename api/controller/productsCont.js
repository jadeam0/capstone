const express = require('express');
const bodyParser = require('body-parser');
const prodRoutes = express.Router();

const Products = require('../model/products');
const product = new Products();

prodRoutes.get('/products', (req, res) => {
    product.fetchProducts(req, res);
});

prodRoutes.get('/product/:id', (req, res) => {
    product.fetchProduct(req, res);
});

prodRoutes.post('/addProduct', bodyParser.json(), (req, res) => {
    product.addproduct(req, res);
});

prodRoutes.put('/product/:id', (req, res) => {
    product.updateProduct(req, res);
});

prodRoutes.delete('/product/:id', (req, res) => {
    product.deleteProduct(req, res);
});

module.exports = prodRoutes;
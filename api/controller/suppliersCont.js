const express = require('express');
const bodyParser = require('body-parser');
const supplierRoutes = express.Router();

const {supplier} = require('../model/index')

supplierRoutes.get('/items', (req, res) => {
    supplier.fetchSuppliers(req, res);
});

supplierRoutes.get('/item/:id', (req, res) => {
    supplier.fetchSupplier(req, res);
});

supplierRoutes.post('/addItem', bodyParser.json(), (req, res) => {
    supplier.addSupplier(req, res);
});

supplierRoutes.put('/item/:id', (req, res) => {
    supplier.updateSupplier(req, res);
});

supplierRoutes.delete('/item/:id', (req, res) => {
    supplier.deleteSupplier(req, res);
});

module.exports = supplierRoutes;
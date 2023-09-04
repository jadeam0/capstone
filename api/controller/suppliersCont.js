const express = require('express');
const bodyParser = require('body-parser');
const supplierRoutes = express.Router();

const {supplier} = require('../model/index')

supplierRoutes.get('/suppliers', (req, res) => {
    supplier.fetchSuppliers(req, res);
});

supplierRoutes.get('supplier/:id', (req, res) => {
    supplier.fetchSupplier(req, res);
});

supplierRoutes.post('addSupplier', bodyParser.json(), (req, res) => {
    supplier.addSupplier(req, res);
});

supplierRoutes.put('/supplier/:id', (req, res) => {
    supplier.updateSupplier(req, res);
});

supplierRoutes.delete('/supplier/:id', (req, res) => {
    supplier.deleteSupplier(req, res);
});

module.exports = supplierRoutes;
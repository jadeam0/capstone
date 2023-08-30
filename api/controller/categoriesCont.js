const express = require('express');
const bodyParser = require('body-parser');
const catRoutes = express.Router();

const Categories = require('../model/categories');
const category = new Categories();

catRoutes.get('/Categories', (req, res) => {
    category.fetchCategories(req, res);
});

catRoutes.get('/category/:id', (req, res) => {
    category.fetchCategory(req, res);
});

catRoutes.post('/addCategory', bodyParser.json(), (req, res) => {
    category.addCategory(req, res);
});

catRoutes.put('/category/:id', (req, res) => {
    category.updateCategory(req, res);
});

catRoutes.delete('/category/:id', (req, res) => {
    category.deleteCategory(req, res);
});

module.exports = catRoutes;
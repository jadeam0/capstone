const express = require('express');
const bodyParser = require('body-parser');
const catRoutes = express.Router();

const {category} = require('../model/index')

catRoutes.get('/Categories', (req, res) => {
    category.fetchCategories(req, res);
});

catRoutes.post('/addCategory', bodyParser.json(), (req, res) => {
    category.addCategory(req, res);
});

catRoutes.delete('/category/:id', (req, res) => {
    category.deleteCategory(req, res);
});

module.exports = catRoutes;
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = express.Router();

const Users = require('../model/users');
const user = new Users();

userRoutes.post('/login', bodyParser.json(), (req, res) => {
    user.login(req, res);
});

userRoutes.get('/users', (req, res) => {
    user.fetchUsers(req, res);
});

userRoutes.get('/user/:id', (req, res) => {
    user.fetchUser(req, res);
});

userRoutes.post('/register', bodyParser.json(), (req, res) => {
    user.register(req, res);
});

userRoutes.put('user/:id', bodyParser.json(), (req, res) => {
    user.updateUser(req, res);
});

userRoutes.delete('user/:id', (req, res) => {
    user.deleteUser(req, res);
});

module.exports = userRoutes;

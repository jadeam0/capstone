const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = express.Router();
// const { authenticationToken } = require('../middleware/authentication')

const {users} = require('../model/index')

userRoutes.post('/login', bodyParser.json(), (req, res) => {
    users.login(req, res);
});

userRoutes.get('/users',  (req, res) => {
    users.fetchUsers(req, res);
});

userRoutes.get('/user/:id',  (req, res) => {
    users.fetchUser(req, res);
});

userRoutes.post('/register', bodyParser.json(), (req, res) => {
    users.register(req, res);
});

userRoutes.put('/user/:id', bodyParser.json(), (req, res) => {
    users.updateUser(req, res);
});

userRoutes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res);
});

module.exports = userRoutes;

require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./controller/usersCont')

const port = process.env.PORT || 8000

app.use(express.urlencoded({extended:  false}));

app.use(
    cors(),
    cookieParser(),
    express.json(),
    userRoutes
);

app.use('/user', userRoutes);

userRoutes.get('^/$|/Capstone', (req, res) => {
    res.sendfile(path.resolve(__dirname, './static/html/index.html'));
});

app.listen(port, () => {
    console.log(`The server is runninng on port ${port}`);
});
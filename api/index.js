require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const userRoutes = require('./controller/usersCont');
const prodRoutes = require('./controller/productsCont');
const cartRoutes = require('./controller/cartCont');
const catRoutes = require('./controller/categoriesCont');
const orderRoutes = require('./controller/ordersCont');
const payRoutes = require('./controller/paymentCont')

const port = process.env.PORT || 8000

app.use(express.static('./static'));

app.use(express.urlencoded({extended:  false}));

app.use(
    cors(),
    cookieParser(),
    express.json(),
    userRoutes
);

app.use('/user', userRoutes);
app.use('/product', prodRoutes);
app.use('/item', cartRoutes);
app.use('/category', catRoutes);
app.use('/order', orderRoutes);
app.use('/payment', payRoutes);


userRoutes.get('^/$|/Capstone', (req, res) => {
    res.sendfile(path.resolve(__dirname, './static/html/index.html'));
});

app.listen(port, () => {
    console.log(`The server is runninng on port ${port}`);
});
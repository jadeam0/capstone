require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8000

app.use(express.urlencoded({extended:  false}));

app.use(
    cors(),
    cookieParser(),
    express.json(),
    // routes
);

// routes.get('^/$|/Capstone', (req, res) => {
//     res.sendfile(path.resolve(__dirname, './'));
// });

app.listen(port, () => {
    console.log(`The server is runninng on port ${port}`);
});
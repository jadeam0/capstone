require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

// const routes = express.Router();

const userRoutes = require("./controller/usersCont");
const prodRoutes = require("./controller/productsCont");
const catRoutes = require("./controller/categoriesCont");
const orderRoutes = require("./controller/ordersCont");
const payRoutes = require("./controller/paymentCont");
const supplierRoutes = require("./controller/suppliersCont");
const errorHandeling = require("./middleware/errorHandeling");

const port = process.env.PORT || 8000;

app.use(express.static("./static"));

app.use(express.urlencoded({ extended: false }));

app.use(
  cors(),
  cookieParser(),
  express.json(),
  bodyParser.json()
);

app.get("^/$|/Capstone", (req, res) => {
  res.sendfile(path.resolve(__dirname, "./static/html/index.html"));
});

app.use("/user", userRoutes);
app.use("/product", prodRoutes);
app.use("/category", catRoutes);
app.use("/order", orderRoutes);
app.use("/payment", payRoutes);
app.use("/supplier", supplierRoutes);

app.use(errorHandeling);



app.listen(port, () => {
  console.log(`The server is runninng on port ${port}`);
});

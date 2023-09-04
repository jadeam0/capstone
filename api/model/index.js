const Users = require('./users');
const Products = require('./products');
const Suppliers = require('./suppliers');
const Payments = require('./payment');
const Orders = require('./orders');
const Categories = require('./categories');



module.exports = {
    users: new Users(),
    products: new Products(),
    supplier: new Suppliers(),
    payment: new Payments(),
    order: new Orders(),
    category: new Categories(),


}
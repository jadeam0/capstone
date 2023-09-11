const db = require('../config/index');

class Products {
    fetchProducts(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, prodPrice, prodUrl, catID
        FROM products;
        `
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                results
            });
        });
    };

    fetchProduct(req, res) {
        const query = `
        SELECT prodID, prodName, quantity, prodPrice, prodUrl, catID
        FROM products
        WHERE prodID = ${ req.params.id };
        `
        db.query(query, (err, result) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                result
            });
        });
    };

    addproduct(req, res) {
        const query = `
        INSERT INTO products
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add product'});
            } else {
                res.status(200).json({msg: 'product added'});
            }
        });
    };

    updateProduct(req, res) {
        const query = `
        UPDATE products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update records'});
            } else {
                res.status(200).json({msg: 'product updated'});
            }
        });
    };

    deleteProduct(req, res) {
        const query =`
        DELETE FROM products
        WHERE prodID = ${ req.params.id };
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Record was not found'});
            } else {
                res.status(200).json({msg: 'Product was deleted'});
            }
        });
    };
};

module.exports = Products;
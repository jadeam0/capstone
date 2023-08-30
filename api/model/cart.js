const db = require('../config/index');

class Cart {
    fetchItems(req, res) {
        const query = `
        SELECT cartID, prodID, userID,
        FROM cart;
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

    fetchItem(req, res) {
        const query = `
        SELECT cartID, prodID, userID,
        FROM cart;
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

    addItem(req, res) {
        const query = `
        INSERT INTO cart
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add Item'});
            } else {
                res.status(200).json({msg: 'Item added to Cart'});
            }
        });
    };

    updateItem(req, res) {
        const query =`
        UPDATE cart
        SET ?
        WHERE cartID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Coulld not update Cart'});
            } else {
                res.status(200).json({msg: 'Cart updated'});
            }
        });
    };

    deleteItem(req, res) {
        const query = `
        DELETE FROM cart
        WHERE cart = ${ req.params.id };
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Item not found'});
            } else {
                res.status(200).json({msg: 'Item deleted from Cart'});
            }
        });
    };
};

module.exports = Cart;
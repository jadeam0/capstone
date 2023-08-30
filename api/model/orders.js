const db = require('../config/index');

class Orders {
    fetchOrders(req, res) {
        const query = `
        SELECT orderID, cartID, orderDate,
        FROM orders;
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

    fetchOrder(req, res) {
        const query =` 
        SELECT orderID, cartID, orderDate,
        FROM orders;
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

    addOrder(req, res) {
        const query =`
        INSERT INTO orders
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add order'});
            } else {
                res.status(200).json({msg: 'Order added'});
            }
        });
    };

    updateOrder(req, res) {
        const query =`
        UPDATE orders
        SET ?
        WHERE orderID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update Orders'});
            } else {
                res.status(200).json({msg: 'Oreders updated'});
            }
        });
    };

    deleteOrder(req, res) {
        const query =`
        DELETE FROM orders
        WHERE orders = ${ req.params.id }; 
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Order not found'});
            } else {
                res.status(200).json({msg: 'Order deleted'});
            }
        });
    };
};

module.exports = Orders;
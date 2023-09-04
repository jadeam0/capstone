const db = require('../config/index');

class Orders {
    fetchOrders(req, res) {
        const query = `
        Select users.*, products.*
        FROM orders
        INNER JOIN products ON orders.prodID = products.prodID
        INNER JOIN users ON orders.userID = users.userID
        WHERE orders.userID = ${req.params.id};
        `
        db.query(query, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                status: res.statusCode,
                results
            });
        });
    };

    addOrder(req, res) {
        const query = `
        INSERT INTO orders
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add order'});
            } else {
                res.status(200).json({msg: 'Order added'});
            }
        })
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
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Order not found'});
            } else {
                res.status(200).json({msg: 'Order deleted'});
            }
        });
    };

    deleteAllOrders(req, res) {
        const query =`
        DELETE FROM orders
        WHERE orders = ?; 
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
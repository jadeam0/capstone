const db = require('../config/index');

class Payments {
    fetchPayments(req, res) {
        const query =`
        SELECT orders.*, suppliers.*
        FROM payment
        LEFT JOIN orders ON payment.orderID = orders.orderID
        RIGHT JOIN suppliers ON payment.suppID = suppliers.suppID;
        `
        db.query(query, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                status: res.statusCode,
                results
            });
        });
    };

    fetchPayment(req, res) {
        const query = `
        SELECT *
        FROM payment;
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

    addPayment(req, res) {
        const query = `
        INSERT INTO payment
        SET ?;
        `
        db.query(query,[req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Payment invalid'});
            } else {
                res.status(200).json({msg: 'Payment successful'});
            }
        });
    };

    updatePayment(req, res) {
        const query =`
        UPDATE payment
        SET ?
        WHERE payID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update payment'});
            } else {
                res.status(200).json({msg: 'Payment updated'});
            }
        });
    };

    deleteItem(req, res) {
        const query = `
        DELETE FROM payment
        WHERE payment = ${ req.params.id };
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Payment not found'});
            } else {
                res.status(200).json({msg: 'Payment deleted'});
            }
        });
    };

    deleteAllItems(req, res) {
        const query = `
        DELETE FROM payment
        WHERE payment = ?;
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Payments not found'});
            } else {
                res.status(200).json({msg: 'Payments deleted'});
            }
        });
    };
};

module.exports = Payments;
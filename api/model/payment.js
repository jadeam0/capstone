const db = require('../config/index');

class Payments {
    fetchPayments(req, res) {
        const query =`
        SELECT payID, orderID, payDate,
        FROM payments;
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

    fetchPayment(req, res) {
        const query = `
        SELECT payID, orderID, payDate,
        FROM payments;
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
        INSERT INTO payments
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
        UPDATE payments
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
        DELETE FROM payments
        WHERE payments = ${ req.params.id };
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Payment not found'});
            } else {
                res.status(200).json({msg: 'Payment deleted'});
            }
        });
    };
};

module.exports = Payments;
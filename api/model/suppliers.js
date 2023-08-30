const db = require('../config/index');

class Suppliers {
    fetchSuppliers(req, res) {
        const query = `
        SELECT suppID, suppName, phone, email, address,
        FROM suppliers;
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

    fetchSupplier(req, res) {
        const query = `
        SELECT suppID, suppName, phone, email, address,
        FROM suppliers;
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

    addSupplier(req, res) {
        const query = `
        INSERT INTO suppliers
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add Supplier'});
            } else {
                res.status(200).json({msg: 'Supplier added'});
            }
        });
    };

    updateSupplier(req, res) {
        const query =`
        UPDATE suppliers
        SET ?
        WHERE suppID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update supplier'});
            } else {
                res.status(200).json({msg: 'Supplier updated'});
            }
        });
    };

    deleteSupplier(req, res) {
        const query = `
        DELETE FROM suppliers
        WHERE suppliers = ${ req.params.id };
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Supplier not found'});
            } else {
                res.status(200).json({msg: 'Supplier deleted'});
            }
        });
    };
};

module.exports = Suppliers;
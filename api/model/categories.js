const db = require('../config/index');

class Categories {
    fetchCategories(req, res) {
        const query =`
        SELECT catID, catName,
        FROM cart;
        `
        db.query(query, (err, results) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res. statusCode,
                results
            });
        });
    };

    fetchCategory(req, res) {
        const query =`
        SELECT catID, catName,
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

    addCategory(req, res) {
        const query =`
        INSERT INTO cart
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not add Category'});
            } else {
                res.status(200).json({msg: 'Category added'});
            }
        });
    };

    updateCategory(req, res) {
        const query =`
        UPDATE categories
        SET ?
        WHERE catID = ?;
        `
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Could not update Categories'});
            } else {
                res.status(200).json({msg: 'Category deleted'});
            }
        });
    };

    deleteCategory(req, res) {
        const query =`
        DELETE FROM categories
        WHERE categories = ${ req.params.id };
        `
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(400).json({err: 'Category deleted'});
            } else {
                res.status(200).json({msg: 'Category deleted'});
            }
        });
    };
};

module.exports = Categories;
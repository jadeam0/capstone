const db = require('../config/index');

class Categories {
    fetchCategories(req, res) {
        const query =`
        SELECT catID, catName
        FROM categories;
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

    addCategory(req, res) {
        const query =`
        INSERT INTO categories
        SET ?;
        `
        db.query(query, [req.body], (err) => {
            if (err) throw err
            else {
                res.status(200).json({msg: 'Category added'});
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
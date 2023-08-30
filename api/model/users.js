const db = require('../config');
const { hash, compare, hashSync } = require('bcrypt');

class Users {
    fetchUsers(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile,
        FROM users;
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

    fetchUser(req, res) {
        const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile, 
        FROM users
        WHERE userID = ${ req.params.id };
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
    login(req, res) {
        const { emailAdd, userPW } =
        req.body 
        const query = `
        SELECT *
        FROM users
        WHERE emailAdd = '${ emailAdd }'
        `
        db.query(query, (err, result) => {
            if (err) throw err
        });
    };
    async register(req, res) {
        const data = req.body;

        // encrypt password
        data.userPW = await hash(data.userPW, 15);

        // payload
        const user = {
            emailAdd: data.emailAdd,
            userPW: data.userPW
        };

        // query
        const query = `
        INSERT INTO users
        SET ?;
        `
        db.query(query, [data], (err) => {
            if (err) {
                console.log(err);
            }
            // create token
            let token = createToken(user)
            res.cookie('LegitUser', token, {
                maxAge: 3600000,
                httpOnly: true 
            });
        });
    };

    updateUser(req, res) {
     const query = `
     UPDATE users
     SET ?
     WHERE userID = ?;
     `
     db.query(query, [req.body, req.params.id], (err) => {
        if (err) {
            console.log(err);
        }
        res.json({
            status: res.statusCode,
            msg: "User record was updated."
        });
     });
    };

    deleteUser(req, res) {
        const query = `
        DELETE FROM users
        WHERE userID = ${ req.params.id };
        `
        db.query(query, (err) => {
            if (err) {
                console.log(err);
            }
            res.json({
                status: res.statusCode,
                msg: 'Record was deleted.'
            });
        });
    };
};

module.exports = Users;
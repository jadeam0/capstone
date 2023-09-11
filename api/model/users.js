const db = require("../config");
const { hash, compare, hashSync } = require("bcrypt");
// const bcrypt = require("bcrypt");
const { createToken } = require('../middleware/authentication');
const jwt = require("jsonwebtoken");
const secretKey = process.env.SECRET_KEY;

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile
        FROM users;
        `
    db.query(query, (err, results) => {
      if (err) {
        console.log(err);
      }
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userAge, gender, userDOB, emailAdd, userPW, userProfile 
        FROM users
        WHERE userID = ${req.params.id};
        `;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      }
      res.json({
        status: res.statusCode,
        result,
      });
    });
  }
  login(req, res) {
    const { emailAdd, userPW } = req.body;
    const query = `
        SELECT *
        FROM users
        WHERE emailAdd = '${emailAdd}'
        `;
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error fetching user");
        return;
      }

      if (result.length === 0) {
        res.status(400).json({ msg: "Authentication failed" });
      }

      const user = result[0];

      // Compare
      compare(userPW, user.userPW, (err, isMatch) => {
        if (err || !isMatch) {
          res.status(400).json({ msg: "Authentication failed" });
          return;
        }

        // jwt
        const token = jwt.sign({ id: user.userID }, secretKey, {
          expiresIn: "1h",
        });
        res.cookie("token", token, { httpOnly: true });
        res.json({ msg: "Login successful" });
      });
    });
  }
  async register(req, res) {
    const data = req.body;
    // encrypt password
    data.userPW = await hash(data.userPW, 15);

    // payload
    const user = {
      emailAdd: data.emailAdd,
      userPW: data.userPW,
    };

    // query
    const query = `
        INSERT INTO users
        SET ?;
        `;
    db.query(query, [data], (err) => {
      if(err) throw err

      // create token
      let token = createToken(Users);
      res.cookie("LegitUser", token, {
        maxAge: 3600000,
        httpOnly: true,
      });
      console.log(data)


      res.json({
        status: res.statusCode,
        msg: "You are now registered.",
        
      });
    });
  }

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
        msg: "User record was updated.",
      });
    });
  }

  deleteUser(req, res) {
    const query = `
        DELETE FROM users
        WHERE userID = ${req.params.id};
        `;
    db.query(query, (err) => {
      if (err) {
        console.log(err);
      }
      res.json({
        status: res.statusCode,
        msg: "Record was deleted.",
      });
    });
  }
}

module.exports = Users;

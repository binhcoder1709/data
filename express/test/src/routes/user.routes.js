const express = require("express");
const userRouter = express.Router();
const connection = require('../config/mysql.database.js')

userRouter.get("/", (req, res) => {
    connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
          console.error('Lỗi truy vấn: ', err);
          res.status(500).send('Lỗi server');
          return;
        }
        res.json(results);
      });
});

userRouter.post("/", (req, res) => {
  res.send("data");
});

module.exports = userRouter;

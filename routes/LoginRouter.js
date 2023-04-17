const router = require('express').Router();
const { Console, error } = require('console');
const {body, validationResult} = require("express-validator");
const util = require ("util");
const bcrypt =require("bcrypt");
const crypto = require("crypto");

const conn = require ("../db/dbConnection");

router.post(
    "/",
    body("email").isEmail().withMessage("please enter a valid email !"),
    body("password")
    .isLength({min:6})
    .withMessage("password shouldn't be less than 6 characters"),
    async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) return res.status(400).json({errors:errors.array ()});
      
      /* check Existance*/
      const query = util.promisify(conn.query).bind(conn); 
      const user = await query (
          "select * from users where email = ? ",
          [req.body.email]
      );
      if(user.length == 0) {
        res.status(404).json({
          errors: [{
            msg: "not correct email or password !" 
        }]});

      }else{
        /* check Password*/
        const checkpassword = await bcrypt.compare(req.body.password,user[0].password);

        if(checkpassword) {
          res.header("x-auth-token",user[0].token);
          delete user[0].password;
          res.status(200).json(user[0]);

        }else {
          res.status(404).json({
            errors: [{
              msg: "not correct email or password !"
          }]});
        }
      }
    }catch (err) {
      res.status(500).json({err:err});
    }
});

module.exports = router;
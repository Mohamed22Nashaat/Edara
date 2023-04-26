const router = require('express').Router();
const {body, validationResult} = require("express-validator");
const util = require ("util");
const bcrypt =require("bcrypt");

const conn = require ("../db/dbConnection");

router.post("/",    
    body("email")
      .isEmail()
      .withMessage("please enter a valid email !"),
    body("password")
      .isLength({min:6})
      .withMessage("password shouldn't be less than 6 characters"),
    async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({errors:errors.array ()});

    const query = util.promisify(conn.query).bind(conn); 
    /* check Existance*/
    const user = await query ("SELECT * FROM users WHERE email = ? ",req.body.email);
    if(user.length == 0) return res.status(404).json({errors: [{msg: "not correct email or password !" }]});

    /* check Password*/
    const checkpassword = await bcrypt.compare(req.body.password,user[0].password);
    if(!checkpassword) return res.status(404).json({errors: [{msg: "not correct email or password !"}]});
    
    res.header("token", user[0].token);
    delete user[0].password;
    res.status(200).json(user[0]);

  }catch (err) {
    res.status(500).json({err:err});
  }
});

module.exports = router;
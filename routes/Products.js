const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");
const { body } = require('express-validator');

// ADMIN [CREATE, UPDATE, DELETE, LIST]
router.post("/create", admin,
body("name") 
    .isString() 
    .withMessage("please enter a vaild product") 
    .isLength({min: 7 })
    .withMessage("product name should be at least 7 character") ,

    body("descripition") 
    .isString() 
    .withMessage("please enter a vaild descripition") 
    .isLength({min: 7 })
    .withMessage("descriptipn name should be at least 20 character") ,
 (req, res,) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array ()});
    }
    res.status(200).json({
        msg: "product created",
    });
});

router.put("/update", admin,(req, res) => {
    res.status(200).json({
        msg: "product updated",
    });
});

router.delete("/delete", admin,(req, res) => {
    res.status(200).json({
        msg: "product deleted",
    });
});

router.get("",authorized,(req, res) => {
    res.status(200).json({
        products: [] ,
    });
});















module.exports = router;
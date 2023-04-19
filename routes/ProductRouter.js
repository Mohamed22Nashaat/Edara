const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
const { body } = require('express-validator');
const upload = require('../middleware/uploadImages');

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/", 
        authorize,
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
        upload.single('image'),
        (req, res,) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors:errors.array ()});
    }
    res.status(200).json({
        msg: "product created",
    });
});

router.put("/:id", 
        authorize,
        upload.single('image'),
        (req, res) => {
    res.status(200).json({
        msg: "product updated",
    });
});

router.delete("/:id", 
        authorize,
        (req, res) => {
    res.status(200).json({
        msg: "product deleted",
    });
});

router.get("/",
        authenticate,
        (req, res) => {
    res.status(200).json({
        products: [] ,
    });
});

router.get("/:id",
        authenticate,
        (req, res) => {
    res.status(200).json({
        products: [] ,
    });
});

module.exports = router;
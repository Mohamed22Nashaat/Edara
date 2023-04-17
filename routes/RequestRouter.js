const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/",
        authorize,
        (req, res) => {
    res.status(200).json({
        msg: "warehouse created",
    });
});

router.put("/:id",
        authorize,
        (req, res) => {
    res.status(200).json({
        msg: "warehouse updated",
    });
});

router.delete("/:id",
        authorize,
        (req, res) => {
    res.status(200).json({
        msg: "warehouse deleted",
    });
});

router.get("/",
        authenticate,
        (req, res) => {
    res.status(200).json({
        warehouse: [],
    });
});

router.get("/:id",
        authenticate,
        (req, res) => {
    res.status(200).json({
        warehouse: [],
    });
});

module.exports = router;
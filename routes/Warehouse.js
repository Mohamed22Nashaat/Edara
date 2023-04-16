const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authorized = require("../middleware/authorize");
const admin = require("../middleware/admin");

// ADMIN [CREATE, UPDATE, DELETE, LIST]
router.post("/create",admin ,(req, res) => {
    res.status(200).json({
        msg: "warehouse created",
    });
});

router.put("/update",admin ,(req, res) => {
    res.status(200).json({
        msg: "warehouse updated",
    });
});

router.delete("/delete",admin,(req, res) => {
    res.status(200).json({
        msg: "warehouse deleted",
    });
});

router.get("",authorized,(req, res) => {
    res.status(200).json({
        warehouse: [],
    });
});















module.exports = router;
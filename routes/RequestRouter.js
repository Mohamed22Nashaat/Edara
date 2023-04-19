const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
const { body } = require('express-validator');
const upload = require('../middleware/uploadImages');
const util = require ("util");

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/", 
        authorize,
        async (req, res) =>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty())
             res.status(400).json({errors:errors.array ()});
        if(!req.file) return res.status(400).json({errors:{"msg":"Image Required"}});

        const request = {
            productID: req.body.productID,
            quantity: req.body.quantity,
            userID: req.body.userID,
            warehouseID: req.body.warehouseID,
        };    
        const query = util.promisify(conn.query).bind(conn);
        await query('INSERT INTO `requests` SET ?', request);
        res.status(200).json({msg: "request created"});

    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.put("/:id", 
        authorize,
        async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const request = await query('SELECT * FROM `requests` WHERE id =?', req.params.id);
        if(!request[0]) return res.status(404).json({msg: "request not found"});

        let productIDNew = req.body.productID  ? req.body.productID  : request[0].productID ;
        let quantityNew = req.body.quantity ? req.body.quantity : request[0].quantity;
        let userIDNew = req.body.userID  ? req.body.userID : request[0].userID ;
        let warehouseIDNew = req.body.warehouseID ? req.body.warehouseID : request[0].warehouseID;
        let statusNew = req.body.status ? req.body.status : request[0].status;
        const requestNew = {
            productID: productIDNew,
            quantity: quantityNew,
            userID: userIDNew,
            warehouseID: warehouseIDNew,
            status: statusNew,
        };
        if(req.body.status == 'accepted'){
            const product = await query('SELECT * FROM products WHERE id = ?',productIDNew)
            const stockNew = Number(product[0].stock) + quantityNew
            await query('UPDATE products SET stock = ?',stockNew);
        }

        await query('UPDATE `requests` SET ? WHERE `id` = ?',[requestNew, request[0].id]);
        res.status(200).json({msg: "request updated"});
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.delete("/:id", 
        authorize,
        async (req, res) => {
    try {   
        const query = util.promisify(conn.query).bind(conn);
        const request = await query('SELECT * FROM `requests` WHERE id = ?', req.params.id);
        if(!request[0]) return res.status(404).json({msg: "request not found" });
        await query('DELETE FROM `requests` WHERE `id` = ?', request[0].id);

        res.status(200).json({msg: "request deleted"});
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/",
        authorize,
        async(req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const requests = await query('SELECT * FROM `requests`');
        res.status(200).json(requests);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/userRequests/:id",
        authorize,
        async(req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const requests = await query('SELECT * FROM `requests` WHERE userID = ?',req.params.id);
        res.status(200).json(requests);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/warehouseRequests/:id",
        authorize,
        async(req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const requests = await query('SELECT * FROM `requests` WHERE warehouseID = ?',req.params.id);
        res.status(200).json(requests);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/:id",
        authorize,
        async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const request = await query('SELECT * FROM `requests` WHERE `id` = ?', req.params.id);
        if(!request[0]) return res.status(404).json({msg:'request not found...'});

        res.status(200).json(request[0]);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

module.exports = router;
const router = require('express').Router();
const fs = require('fs');
const util = require ("util");

const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
const upload = require('../middleware/uploadImages');

const conn = require ("../db/dbConnection");

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/", 
        authorize,
        upload.single('image'),
        async (req, res) =>{
    try{    
        if(!req.file) {
            fs.unlinkSync('./public/' + req.file.filename);
            return res.status(400).json({errors:{"msg":"Image Required"}});
        }
        const query = util.promisify(conn.query).bind(conn);
        
        const checkWarehouse = await query('SELECT * FROM warehouses WHERE id = ?', req.body.warehouseID);
        if(!checkWarehouse[0]){
            fs.unlinkSync('./public/' + req.file.filename);
            return res.status(400).json({errors:{"msg":"Warehouse Doesn't Exist.."}});
        } 
        const product = {
            name: req.body.name,
            stock: req.body.stock,
            description: req.body.description?req.body.description : 'null',
            warehouseID: req.body.warehouseID,
            photo: req.file.filename,
        };
        await query('INSERT INTO `products` SET ?', product);
        res.status(200).json({msg: "product created"});

    }catch(err){
        fs.unlinkSync('./public/' + req.file.filename);
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.put("/:id", 
        authorize,
        upload.single('image'),
        async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const product = await query('SELECT * FROM `products` WHERE id =?', req.params.id);

        if(!product[0]) {
            fs.unlinkSync('./public/' + req.file.filename);
            return res.status(404).json({msg: "product not found"});
        }

        let nameNew = req.body.name ? req.body.name : product[0].name;
        let descriptionNew = req.body.description ? req.body.description : product[0].description;
        let stockNew = req.body.stock ? req.body.stock : product[0].stock;
        let warehouseIDNew = req.body.warehouseID ? req.body.warehouseID : product[0].warehouseID;
        let photoNew;
        if(req.file){
            photoNew = req.file.filename ;
            fs.unlinkSync('./public/' + product[0].photo);
        }else{
            photoNew = product[0].photo;
        }
        const productNew = {
            name: nameNew,
            description: descriptionNew,
            stock: stockNew,
            warehouseID: warehouseIDNew,
            photo: photoNew,
        };
        await query('UPDATE `products` SET ? WHERE `id` = ?',[productNew, product[0].id]);
        res.status(200).json({msg: "product updated"});
    }catch(err){
        fs.unlinkSync('./public/' + req.file.filename);
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.delete("/:id", 
        authorize,
        async (req, res) => {
    try {   
        const query = util.promisify(conn.query).bind(conn);
        const product = await query('SELECT * FROM `products` WHERE id =?', req.params.id);

        if(!product[0]) return res.status(404).json({msg: "product not found"});

        fs.unlinkSync('./public/' + product[0].photo);
        await query('DELETE FROM `products` WHERE `id` = ?', product[0].id);

        res.status(200).json({msg: "product deleted"});
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
        const products = await query('SELECT * FROM `products`');
        res.status(200).json(products);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/warehouseProducts/:id",
        authenticate,
        async(req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const checkWarehouse = await query('SELECT * FROM warehouses WHERE id = ?',req.params.id); 
        if(!checkWarehouse[0]) return res.status(404).json({msg: "Warehouse not found"});

        const products = await query('SELECT * FROM `products` WHERE warehouseID = ?',req.params.id);
        res.status(200).json(products);
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
        const product = await query('SELECT * FROM `products` WHERE `id` = ?', req.params.id);
        if(!product[0]) return res.status(404).json({msg:'product not found...'});

        res.status(200).json(product[0]);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

module.exports = router;
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
        async (req, res) =>{
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty())
            return res.status(400).json({errors:errors.array ()});


        if(!req.file) return res.status(400).json({
                errors:{
                    "msg":"Image Required",
                }
            });

        const product = {
            name: req.body.name,
            stock: req.body.stock,
            description: req.body.description,
            warehouseID: req.body.warehouseID,
            photo: req.file.filename,
        };
    
        const query = util.promisify(conn.query).bind(conn);
        await query('INSERT INTO `products` SET ?', product);
        res.status(200).json({
            msg: "product created",
        });

    }catch(err){
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

        if(!product[0]) return res.status(404).json({
            msg: "product not found"
        });

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
        res.status(200).json({
            msg: "product updated",
        });
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
        const product = await query('SELECT * FROM `products` WHERE id =?', req.params.id);

        if(!product[0]) return res.status(404).json({
                msg: "product not found"
            });

        fs.unlinkSync('./public/' + product[0].photo);
        await query('DELETE FROM `products` WHERE `id` = ?', product[0].id);

        res.status(200).json({
            msg: "product deleted",
        });
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/",
        authenticate,
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
        const products = await query('SELECT * FROM `products` WHERE warehouseID = ?',req.params.id);
        res.status(200).json(products);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/:id",
        authenticate,
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
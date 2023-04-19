const router = require('express').Router();
const conn = require ("../db/dbConnection");
const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");
const { body } = require('express-validator');
const util = require ("util");

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/",
        authorize,
        body("name") 
            .isString() 
            .withMessage("please enter a vaild warehouse name"),
        async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors:errors.array ()});

        const warehouse = {
            name: req.body.name,
            location: req.body.location,
            status: req.body.status
        };
    
        const query = util.promisify(conn.query).bind(conn);
        await query('INSERT INTO `warehouses` SET ?', warehouse);
        res.status(200).json({ msg: "warehouse created" });

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
        const warehouse = await query('SELECT * FROM `warehouses` WHERE id =?', req.params.id);

        if(!warehouse[0]) return res.status(404).json({
            msg: "warehouse not found"
        });

        if(req.body.supervisorID){
            const checkUser = await query('SELECT * FROM users WHERE id = ?', req.body.supervisorID);
            if(checkWarehouse[0].supervisorID) return res.status(400).json({errors:{"msg":"Warehouse Already Occupied "}});

            await query('UPDATE users SET warehouseID = NULL WHERE warehouseID = ?', warehouse[0].id);
            await query('UPDATE users SET warehouseID = ? WHERE id = ?', [warehouse[0].id, req.body.supervisorID]);
        }
        let nameNew = req.body.name ? req.body.name : warehouse[0].name;
        let locationNew = req.body.location ? req.body.location : warehouse[0].location;
        let statusNew = req.body.status ? req.body.status : warehouse[0].status;
        let supervisorIDNew = req.body.supervisorID ? req.body.supervisorID : warehouse[0].supervisorID;
      
        const warehouseNew = {
            name: nameNew,
            location: locationNew,
            status: statusNew,
            supervisorID: supervisorIDNew,
        };

        await query('UPDATE `warehouses` SET ? WHERE `id` = ?',[warehouseNew, warehouse[0].id]);
        res.status(200).json({ msg: "warehouse updated",});
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.delete("/:id",
        authorize,
        async(req, res) => {
    try {   
        const query = util.promisify(conn.query).bind(conn);
        const warehouse = await query('SELECT * FROM `warehouses` WHERE id =?', req.params.id);
        if(!warehouse[0]) return res.status(404).json({ msg: "warehouse not found"});

        await query('DELETE FROM `warehouses` WHERE `id` = ?', warehouse[0].id);
        res.status(200).json({msg: "warehouse deleted"});
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

router.get("/",
        authorize,
        async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const warehouses = await query('SELECT * FROM `warehouses`');
        res.status(200).json(warehouses);
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
    const warehouse = await query('SELECT * FROM `warehouses` WHERE `id` = ?', req.params.id);
    if(!warehouse[0]) return res.status(404).json({msg:'warehouse not found...'});

    res.status(200).json(warehouse[0]);
}catch(err){
    console.log(err);
    res.status(500).json({err: err});
}
});

module.exports = router;
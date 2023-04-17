const router = require('express').Router();
const conn = require ("../db/dbConnection");
const util = require('util');
const bcrypt = require('bcrypt');
const {body, validationResult} = require('express-validator');
const crypto = require('crypto');

const authenticate = require("../middleware/authentication");
const authorize = require("../middleware/authorization");

// authorize [CREATE, UPDATE, DELETE, LIST]
router.post("/",
        authorize,
        body("email").isEmail().withMessage("please enter a valid email !"),
        body("password")
        .isLength({min:6})
        .withMessage("password shouldn't be less than 6 characters"),
        async (req, res) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({errors:errors.array ()});
        
/* check Existance*/
        const query = util.promisify(conn.query).bind(conn);
        const user = await query(
            "SELECT * FROM users WHERE email = ?",
            [req.body.email]
        );
        if(user.length)
            return res.status(400).json({
                errors:{
                    "msg":"Email already exists",
                }
            });
/* Prepare to Save*/
        const userInfo = {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: await bcrypt.hash(req.body.password, 10),
            token: crypto.randomBytes(10).toString('hex'),
            warehouseID: req.body.warehouseID? req.body.warehouseID: null
        };
/* Insert*/
        await query('INSERT INTO users SET ? ',userInfo);
        delete userInfo.password;
        res.status(200).json('Saved..');
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
            const user = await query(
                "SELECT * FROM users WHERE id = ?",
                req.params.id
            );
            if(!user[0]) 
                return res.status(400).json({
                    errors:{
                        "msg":"User doesn't exist..",
                    }
                });
            const userInfo = {
                name: req.body.name? req.body.name: user[0].name,
                phone: req.body.phone? req.body.phone: user[0].phone,
                status: req.body.status? req.body.status: user[0].status,
                warehouseID: req.body.warehouseID? req.body.warehouseID: user[0].warehouseID
            };
            await query('UPDATE users SET ?  WHERE id = ?',[userInfo, user[0].id]);
            res.status(200).json('Updated..');
            
        }catch(err){
            console.log(err);
            res.status(500).json({err: err});
        }
});

router.delete("/:id",
        authorize,
        async (req, res) => {
    try{
        const query = util.promisify(conn.query).bind(conn);
        const user = await query(
            "SELECT * FROM users WHERE id = ?",
            req.params.id
        );
        if(!user[0]) 
            return res.status(400).json({
                errors:{
                    "msg":"User doesn't exist..",
                }
            });
        await query('DELETE FROM `users` WHERE `id` = ?', user[0].id);
        res.status(200).json("Deleted..");
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
        const user = await query(
            "SELECT * FROM users WHERE role != 'admin'"
        );
        
        for(i in user){
            delete user[i].password;
        }
        res.status(200).json(user);
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
        const user = await query(
            "SELECT * FROM users WHERE id = ?",
            req.params.id
        );
        if(!user[0]) 
            return res.status(400).json({
                errors:{
                    "msg":"User doesn't exist..",
                }
            });
        delete user[0].password;
        res.status(200).json(user[0]);
    }catch(err){
        console.log(err);
        res.status(500).json({err: err});
    }
});

module.exports = router;
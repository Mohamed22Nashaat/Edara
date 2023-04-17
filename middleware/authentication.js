const conn = require ("../db/dbConnection");
const util = require ("util");


const authentication =async (req, res, next) =>{
try{
    const query = util.promisify(conn.query).bind(conn);
    const {token} = req.headers; 
    if(!token) return res.status(403).json({
                    msg: "sorry you must login first"
                });
    const user = await query("select * from users where token = ? ", token);
    

    if(!user[0]) return res.status(403).json({
                    msg: "you are not authorized to access this route !",
                });
    
    next();
    
}catch(err){
    console.log(err);
    res.status(500).json({err: err});
}
};

module.exports = authentication;
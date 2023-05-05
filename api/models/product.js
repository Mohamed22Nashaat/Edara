const util = require ("util");
const fs = require('fs');


const conn = require ("../db/dbConnection");
const query = util.promisify(conn.query).bind(conn);

module.exports = class Product{

    constructor(){};

    async AddProduct(productInfo){

        if(!productInfo.file) {
            return {
                msg: "Image Required"
            };
        }
        
        const checkWarehouse = await query('SELECT * FROM warehouses WHERE id = ?', productInfo.warehouseID);
        if(!checkWarehouse[0]){
            fs.unlinkSync('./public/' + productInfo.file.filename);
            return {
                err: "Warehouse Doesn't Exist.."
            };
        } 
        const product = {
            name: productInfo.name,
            stock: productInfo.stock,
            description: productInfo.description ? productInfo.description : 'null',
            warehouseID: productInfo.warehouseID,
            photo: productInfo.file.filename,
        };
        await query('INSERT INTO `products` SET ?', product);
        return {
            msg: "product created"
        };
    }

    async UpdateProduct(oldID, newInfo){
        
        const product = await query('SELECT * FROM `products` WHERE id =?', oldID);

        if(!product[0]) {
            if(newInfo.file)
                fs.unlinkSync('./public/' + newInfo.file.filename);
            return {
                msg: "product not found"
            };
        }

        if(newInfo.warehouseID) {
            let warehouseCheck = await query('SELECT * FROM `warehouses` WHERE id = ?', newInfo.warehouseID);
            if(!warehouseCheck[0]) {
                if(newInfo.file)
                    fs.unlinkSync('./public/' + newInfo.file.filename);
                return {
                    msg: "warehouse not found"
                };
            }
                
        }

        let photoNew;
        if(newInfo.file){
            photoNew = newInfo.file.filename ;
            fs.unlinkSync('./public/' + product[0].photo);
        }else{
            photoNew = product[0].photo;
        }

        let productInfo = {
            name: newInfo.name ? newInfo.name : product[0].name,
            description: newInfo.description ? newInfo.description : product[0].description,
            stock: newInfo.stock ? newInfo.stock : product[0].stock,
            warehouseID: newInfo.warehouseID ? newInfo.warehouseID : product[0].warehouseID,
            photo: photoNew,
        }
      
        await query('UPDATE `products` SET ? WHERE `id` = ?',[productInfo, product[0].id]);
        return {
            msg: "product updated"
        };
    }

    async DeleteProduct(id){
        
        const warehouse = await query('SELECT * FROM `warehouses` WHERE id =?', id);
        if(!warehouse[0]) 
            return {
                msg: "warehouse not found"
            };

        await query('DELETE FROM `warehouses` WHERE `id` = ?', warehouse[0].id);
        return {
            msg: "warehouse deleted"
        };
    }

    async GetProducts(){
        
        let warehouses = await query("SELECT * FROM `warehouses`");
        return warehouses;
    }

    async GetProduct(id){
        
        let warehouse = await query("SELECT * FROM `warehouses` WHERE id = ?", id);
        if(!warehouse[0]) 
            return {
                err : "Warehouse doesn't exist.."
            };

        return warehouse[0];
    }
};
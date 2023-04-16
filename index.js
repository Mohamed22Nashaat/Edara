const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());



const auth = require("./routes/Auth");
const products = require("./routes/products");
const warehouse = require("./routes/Warehouse");

app.listen(5000,"localhost", ()=>{
    console.log("SERVER IS RUNINNG");
});
  
app.use("/auth",auth);
app.use("/products",products);
app.use("/warehouse",warehouse);
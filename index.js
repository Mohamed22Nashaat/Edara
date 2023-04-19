const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("upload"));
const cors = require("cors");
app.use(cors());


// End Points

const login = require("./routes/LoginRouter");
const products = require("./routes/ProductRouter");
const warehouse = require("./routes/WarehouseRouter");
const user = require("./routes/UserRouter");
const request = require("./routes/RequestRouter");

app.use("/login",login);
app.use("/user",user);
app.use("/warehouse",warehouse);
app.use("/products",products);
app.use("/request",request);

// Listening
app.listen(5000,"localhost", ()=>{
    console.log("SERVER IS RUNINNG");
});
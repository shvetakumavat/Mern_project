//imporing dotenv for global variable which are use in project
require("dotenv").config();
//creating server connection
const express=require("express");
const app=express();
// mongodb connection 
const connection=require("./config/db");

const productRouting=require("./routes/productRoutes");
app.use(express.json());

app.use('/products',productRouting);


//MOngodb waghur project passward: User

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>console.log("server is runnig"));


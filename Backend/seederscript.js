require('dotenv').config();

const productdb=require('./data/producs');

const connectdb=require("./config/db")
const product=require('./model/products')



const importdb=async()=>{
    try{
        await product.deleteMany({});

       const r = await product.insertMany(productdb);
       console.log(r);

        console.log("data import success..");

       process.exit();
    }catch(err){
            console.error(err);
            process.exit(1);
    }
}
importdb();
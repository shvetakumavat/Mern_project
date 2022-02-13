const mongoose=require("mongoose")
 

const productschema = new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        description:
        {
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        stock:{
            type:Number,
            required:true
        },
        imgUrl:{
            type:String,
            required:true
        }
    }
)
const product=mongoose.model("product",productschema);

module.exports=product;
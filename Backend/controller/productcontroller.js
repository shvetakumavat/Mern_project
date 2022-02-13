const product = require("../model/products");

const getproducts=async(req,res)=>{
    try {
        const products=await product.find({});
        res.json(products);

    } catch (error) {
        
        console.error(error);

        res.status(500).json({message:"server Error"});

    }
}

const getproductById=async(req,res)=>{
    try {
        const product= await product.findById(req.params.id);
    
        res.json(products);

    } catch (error) {
        
        console.error(error);

        res.status(500).json({message:"server Error"});

    }
}

module.exports={
    getproductById,
    getproducts
}
const express= require("express")
const router=express.Router();

const{ getproductById,getproducts}=require('../controller/productcontroller');
router.get('/',getproducts)

router.get('/:id',getproductById)

module.exports=router;
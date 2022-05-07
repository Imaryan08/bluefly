const express=require("express");
const router=express.Router();
const {protect}=require("../middleware/authenticate")
const{getprivate}=require("../controllers/private")

router.get("/",protect,getprivate)

module.exports=router;
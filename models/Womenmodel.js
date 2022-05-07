const mongoose=require("mongoose");

const Womenschema=new mongoose.Schema({
    image_url:{type:String,required:true},
    brand:{type:String,required:true},
    price:{type:Number,required:true},
    strikedoffprice:{type:Number,required:true},
    id:{type:String,required:true},
    discount:{type:String,required:true},
    size:{type:[Number],required:true},
    title:{type:String,required:true},
})

const Women=mongoose.model("women",Womenschema);

module.exports=Women;
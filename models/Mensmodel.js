const mongoose=require("mongoose");

const Menschema=new mongoose.Schema({
    image_url:{type:String,required:true},
    brand:{type:String,required:true},
    id:{type:String,required:true},
    title:{type:String,required:true},
    strickedoffprice:{type:Number,required:true},
    price:{type:Number,required:true},
    discount:{type:String,required:true},
    sizes:{type:[String],required:true},
    
})

const Men=mongoose.model("men",Menschema);

module.exports=Men;
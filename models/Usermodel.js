const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const cpt=require("crypto");

const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
 firstname:{type:String,required:[true,"please provide first name"]},
 lastname:{type:String,required:[true,"please provide last name"]},
 email:{type:String,required:[true,"please provide last name"],unique:true,
match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
"please provide a valid email"]},
 password:{type:String,required:[true,"please provide"],minlength:6,select:false},
 resetpasswordToken:String,
 resetpasswordExpire:Date
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt);
    next()
})

userSchema.methods.matchpassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.getsignToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_MASTER_KEY,{
        expiresIn:process.env.JWT_EXPIRE,
    })
}

userSchema.methods.getresetToken=function(){
const resetToken=cpt.randomBytes(32).toString("hex");
this.resetpasswordToken=cpt.createHash("sha256").update(resetToken).digest("hex");
return resetToken;
}

const User=mongoose.model("user",userSchema);

module.exports=User;
const User=require("../models/Usermodel");
const sendEmail=require("../utils/sendEmail")

exports.register= async(req,res,next)=>{
    const {firstname,lastname,email,password}=req.body;

    try {
        const user=await User.create({
            firstname,lastname,email,password
        })
        sendToken(user,201,res)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.login=async(req,res,next)=>{
    const{email,password}=req.body;
    if(!email || !password){
        res.status(400).json({message:"please provide email and password"});
    }
    try {
        const user=await User.findOne({email}).select("+password");
        if(!user){
            res.status(404).json({message:"invalid credential"})
        }
        const isMatch=await user.matchpassword(password);
        if(!isMatch){
            res.status(404).json({message:"invalid credential"})
        }
        sendToken(user,200,res)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.forgotpassword=async(req,res,next)=>{
    const{email}=req.body;

     try {
        const user=await User.findOne({email});
        if(!user){
            res.status(500).json({message:"email could not sent"})
        }
        const resetToken=user.getresetToken();
        await user.save();
        const resetUrl=`http:localhost:3000/passwordrest/${resetToken}`;
        const message=`
        <h1>You have requested for a reset password</h1>
        <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
        `
        try {
          await sendEmail({
              to:user.email,
              subject:"password reset",
              text:message,
          }) 
          res.status(201).json({data:"email sent"})
        } catch (error) {
            
        }
     } catch (error) {
         
     }
}

exports.resetpassword=(req,res,next)=>{
    res.send("resetpassword route")
}

const sendToken=(user,statusCode,res)=>{
    const token=user.getsignToken();
    res.status(statusCode).json({success:"true",token})
}

const jwt=require("jsonwebtoken")
const User=require("../models/Usermodel");
exports.protect=async (req,res,next)=>{
  let token;
  if(req.headers.authorization && req.headers.authorization.startWith("Bearer")){
      token=req.headers.authorization.split(" ")[1];

  }
  if(!token){
      return res.status(401).json({message:"Not authorize to access this route"})
  }

  try {
      const decode=jwt.verify(token,process.env.JWT_MASTER_KEY);
      const user=await User.findById(decode.id);
      if(!user){
        return res.status(404).json({message:"no user found"})
      }
      req.user=user;
      next();
  } catch (error) {
    return res.status(401).json({message:error.message})
  }
}
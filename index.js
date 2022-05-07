require("dotenv").config({path:"./config.env"})

const express=require("express");
const app=express();
const connect=require("./config/db")
connect();
const port=process.env.PORT||5000;

app.use(express.json());

app.use("/api/auth",require("./routes/auth"))
app.use("/api/private",require("./routes/private"))
app.use("/products",require("./routes/product"))

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})
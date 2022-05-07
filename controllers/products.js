const Women=require("../models/Womenmodel");
const Men=require("../models/Mensmodel");

exports.setwomenjacket=async(req,res)=>{
    try {
        const jacket= await Women.create(req.body);
        res.status(201).json({prod:jacket})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getwomenjacket=async(req,res)=>{
    try {
        const jacket= await Women.find();
        res.status(200).json({prod:jacket})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.setwomenjeans=async(req,res)=>{
    try {
        const jeans= await Women.create(req.body);
        res.status(201).json({prod:jeans})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getwomenjeans=async(req,res)=>{
    try {
        const jeans= await Women.find();
        res.status(200).json({prod:jeans})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.setwomenshoes=async(req,res)=>{
    try {
        const shoes= await Women.create(req.body);
        res.status(201).json({prod:shoes})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getwomenshoes=async(req,res)=>{
    try {
        const shoes= await Women.find();
        res.status(200).json({prod:shoes})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.setwomenearing=async(req,res)=>{
    try {
        const earing= await Women.create(req.body);
        res.status(201).json({prod:earing})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getwomenearing=async(req,res)=>{
    try {
        const earing= await Women.find();
        res.status(200).json({prod:earing})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.setwomennecklase=async(req,res)=>{
    try {
        const necklase= await Women.create(req.body);
        res.status(201).json({prod:necklase})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getwomennecklase=async(req,res)=>{
    try {
        const necklase= await Women.find();
        res.status(200).json({prod:necklase})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.setmenshirt=async(req,res)=>{
    try {
        const shirt= await Men.create(req.body);
        res.status(201).json({prod:shirt})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getmenshirt=async(req,res)=>{
    try {
        const shirt= await Men.find();
        res.status(200).json({prod:shirt})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.setmenTshirt=async(req,res)=>{
    try {
        const Tshirt= await Men.create(req.body);
        res.status(201).json({prod:Tshirt})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getmenTshirt=async(req,res)=>{
    try {
        const Tshirt= await Men.find();
        res.status(200).json({prod:Tshirt})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


exports.setmenjacket=async(req,res)=>{
    try {
        const jacket= await Men.create(req.body);
        res.status(201).json({prod:jacket})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.getmenjacket=async(req,res)=>{
    try {
        const jacket= await Men.find();
        res.status(200).json({prod:jacket})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

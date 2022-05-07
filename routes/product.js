const express=require("express");
const router=express.Router();
const{setwomenjacket,getwomenjacket,setwomenjeans,getwomenjeans,setwomenshoes,getwomenshoes, 
    setwomenearing, getwomenearing, setwomennecklase, getwomennecklase, setmenshirt, getmenshirt, setmenTshirt, getmenTshirt, setmenjacket, getmenjacket}=require("../controllers/products");

router.post("/womenjacket",setwomenjacket);
router.get("/womenjacket",getwomenjacket)

router.post("/womenjeans",setwomenjeans);
router.get("/womenjeans",getwomenjeans)

router.post("/womenshoes",setwomenshoes);
router.get("/womenshoes",getwomenshoes);

router.post("/womenearing",setwomenearing);
router.get("/womenearing",getwomenearing);

router.post("/womennecklase",setwomennecklase);
router.get("/womennecklase",getwomennecklase);

router.post("/menshirt",setmenshirt);
router.get("/menshirt",getmenshirt);

router.post("/menTshirt",setmenTshirt);
router.get("/menTshirt",getmenTshirt);

router.post("/menjacket",setmenjacket);
router.get("/menjacket",getmenjacket);

module.exports=router;
const User = require("../models/User");
const { verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//wewill use middleware here to verify the json web token

//Update
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString();
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.param.id);
        res.status(200).json("User has been deleted...");
    }catch(err){
        res.status(500).json()
    }
})

//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
        const user = await User.findById(req.param.id);
        const { password, ...others } = user._doc;//first is pswd and other is other info email etc
        res.status(200).json(others);
    }catch(err){
        res.status(500).json();
    }
});

//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    const query = req.query.new
    try{
        const user = query ? await user.find().sort({_id:-1}).limit(1) : await User.find();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json();
    }
});

//GET USERS STATS
router.get("/stats",verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));//return us the last year
    try{
        const data = await User.aggregate([
            {$match: {createdAt: { $gte: lastYear }}},
            {
                $project:{
                    month: {$month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum:1 },
                },
            },
        ]);
        res.status(200).json(data);
    }catch(err){
        res.status(500).json();
    }
});
module.exports = router;
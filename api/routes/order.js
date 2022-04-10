const Order = require("../models/Order");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();


//CREATE
router.post("/", verifyToken, async(req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }

});


//wewill use middleware here to verify the json web token

//Update
router.put("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        const updatedOrder = awaitOrder.findByIdAndUpdate(
            req.params.id, {
                $set: req.body,
            }, { new: true }
        );
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});
//DELETE
router.delete("/:id", verifyTokenAndAdmin, async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order has been deleted...");
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER ORDERS

router.get("/find/:userId", verifyTokenAndAuthorization, async(req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        res.status(200).json(Orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// //GET ALL ORDERS
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try {

        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async(req, res) => {
    const date = new Date();//1st sept
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));//1st aug
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));//1st jul

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },//plus 2 months
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount", //in our Order model we have our user id as amount
                },
            },
            {

                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" },
                },
            },
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
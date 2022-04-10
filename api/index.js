//1 & 2 is For creating express server
const express = require("express");
const app = express();
// line 4 for connecting to the mongodb library n then
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

dotenv.config();



mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

app.get("/api/test", () => {
    console.log("Test is successful");
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

//FOR LISTENING TO THE SERVER app.listen is used n weprovide a particular port number
app.listen(process.env.PORT || 8000, () => {
    console.log("Backend server is running in port 8000");
});
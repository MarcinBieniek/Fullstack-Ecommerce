const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const orderRoute = require("./routes/order")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe")
const cors = require("cors");

mongoose.connect(
  process.env.MONGO_URL
  )
  .then(() => console.log("DBConnection succesfull"))
  .catch((err) => {
    console.log(err)
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.URL || 8083, () => {
  console.log("Backend server is running!")
})
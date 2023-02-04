const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const orderRoute = require("./routes/order")
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart")

dotenv.config(); 

mongoose.connect(
  process.env.MONGO_URL
  )
  .then(() => console.log("DBConnection succesfull"))
  .catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);

app.listen(process.env.URL || 8082, () => {
  console.log("Backend server is running!")
})
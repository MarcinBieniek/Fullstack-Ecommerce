const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")

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
app.use("/api/user", userRoute);

app.listen(process.env.URL || 8082, () => {
  console.log("Bakcend server is running!")
})
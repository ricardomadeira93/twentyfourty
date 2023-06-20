const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const Stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
app.use(bodyParser.json())


app.get("/", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on Port #${port}`);
});

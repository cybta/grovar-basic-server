const express = require("express");
const app = express();
const cors = require("cors");

//MIDLEWARES
app.use(cors());
app.use(express.json());

const dataProducts = require("./data/products.json");

app.get("/", function (req, res) {
  res.send("Welcome to my api");
});

app.get("/API/products", function (req, res) {
  res.send(dataProducts);
});

app.listen(
  process.env.PORT || 5000,
  console.log("Server is runing on port 5000")
);

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

app.get("/API/products/:id", (req, res) => {
  const { id } = req.params;
  let found = false;
  dataProducts.forEach((product) => {
    if (product.product_id === id) {
      found = true;
      return res.json(product);
    }
  });
  if (!found) {
    res.status(404).json("No such product");
  }
});

app.listen(
  process.env.PORT || 5000,
  console.log("Server is runing on port 5000")
);

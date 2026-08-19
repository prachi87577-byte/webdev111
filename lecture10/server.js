const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const products = [
  {
    id: 4,
    name: "Lap",
    category: "Electronics",
    price: 999.99
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 699.99
  }
];

app.get("/api/products", (req, res) => {
  res.json({ success: true, result: products });
});

app.get("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  return res.json({ success: true, result: product });
});

app.post("/api/products", (req, res) => {
  const product = req.body;
  const nextId = products.length ? Math.max(...products.map((item) => item.id)) + 1 : 1;

  products.push({ id: nextId, ...product });
  res.json({ success: true, result: product });
});

app.put("/api/products", (req, res) => {
  const product = req.body;

  if (!product || product.id === undefined) {
    return res.status(400).json({ success: false, message: "Product id is required" });
  }

  const index = products.findIndex((item) => item.id === Number(product.id));

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  products[index] = { ...products[index], ...product };
  return res.json({ success: true, result: products[index] });
});

app.put("/api/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = req.body;
  const result = products.find((item) => item.id === id);

  if (!result) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }

  Object.assign(result, product);
  return res.json({ success: true, result });
});

app.listen(port, () => {
  console.log("Server is running");
});
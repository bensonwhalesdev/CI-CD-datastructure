const express = require("express");
const router = express.Router();
const productsController = require("./productsController");

// GET /products
router.get("/", productsController.getAllProducts);

// GET /products/:id
router.get("/:id", productsController.getProductById);

module.exports = router;

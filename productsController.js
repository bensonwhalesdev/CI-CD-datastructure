const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Headphones", price: 199 },
  { id: 3, name: "Smartphone", price: 799 },
  { id: 4, name: "Keyboard", price: 49 },
  { id: 5, name: "Mouse", price: 29 },
  { id: 6, name: "Monitor", price: 249 },
  { id: 7, name: "Speaker", price: 149 },
  { id: 8, name: "Webcam", price: 89 },
  { id: 9, name: "Printer", price: 129 },
  { id: 10, name: "USB Drive", price: 19 }
];


module.exports = {
  getAllProducts: (req, res) => {
    res.json(products);
  },

  getProductById: (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id == id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  }
};

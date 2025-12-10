require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const { exec } = require('child_process');

app.use((req, res, next)=>{
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

app.use(bodyParser.json());


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

const router = express.Router();

router.get("/", (req, res) => {
  res.json(products);
});

router.get('/webhook', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Webhook endpoint ready' });
});

router.post('/webhook', (req, res) => {
    // Call the deploy script
    exec('node deploy.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${stderr}`);
            return res.status(500).send('Deployment failed');
        }
        console.log(stdout);
        res.status(200).send('Deployment successful');
    });
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("My name is Admin");
});
// app.use('/', router)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


require('dotenv').config()
const express = require("express");
const app = express();
const PORT = process.env.port || 2000;
const router = require("./router/item");
const datacnt = require('./db/connect')
// middleware
app.use("/api/items",router);

app.get("/", (req, res) => {
  res.send("heelo this is express response");
});

const start = async() => {
  try {
    await datacnt(process.env.DBCONNECT);
    app.listen(PORT);
    console.log("hurr raaa a gya response express ka");
  } catch (error) {
    console.log(error);
  }
};

start();

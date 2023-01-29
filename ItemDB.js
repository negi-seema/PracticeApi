require("dotenv").config();
const mymodel = require("./models/modelschema");
const dbconnection = require("./db/connect");
const jsonitem = require("./item.json");

const start = async () => {
  try {
    await dbconnection(process.env.DBCONNECT);
    await mymodel.deleteMany()
    await mymodel.create(jsonitem);
    console.log('connection successful')
  } catch (error) {
    console.log(`.......................
    ........................
    ERROR COME TO ITEMDB.JS PAGE
    ..........................
    ........................${error}`);
  }
};

start();

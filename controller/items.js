const allitems = require("../models/modelschema");

const AllItems = async (req, res) => {
  try {
    let nonSelectedItems = ['-subimage','-rating','-stock','-createdAt','-stars','-reviews'];
    let allSelectedItems = ['subimage','rating','stock','createdAt','stars','reviews' ,'-image']
    let { id ,name} = req.query;
    let queryObject = {};

    if (name) {
      //regex is used for searching purpose find all the similar
      // things  i represent caseincenctive
      queryObject.name = { $regex: name, $options: "i" };
    }

    let myFindQuery = allitems.find(queryObject);
    

   

    if(id){
     queryObject.id = id;
     myFindQuery = allitems.find(queryObject).select(allSelectedItems)
    }

    
  
    let itemresult = await myFindQuery.select(nonSelectedItems);
    res.status(200).json({ itemresult });
  } catch (error) {
    console.log(error);
  }
};

const ItemsTest = async (req, res) => {
  try {
    let nonSelectedItems = ['-subimage','-rating','-stock','-createdAt','-stars','-reviews'];
    let allSelectedItems = ['subimage','rating','stock','createdAt','stars','reviews' ,'-image']
    let { id ,name} = req.query;
    let queryObject = {};

    if (name) {
      //regex is used for searching purpose find all the similar
      // things  i represent caseincenctive
      queryObject.name = { $regex: name, $options: "i" };
    }

    let myFindQuery = allitems.find(queryObject);


    if(id){
     queryObject.id = id;
     myFindQuery = allitems.find(queryObject).select(allSelectedItems)
    }

    
  
    let itemresult = await myFindQuery.select(nonSelectedItems);
    res.status(200).json({ itemresult });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { AllItems, ItemsTest };

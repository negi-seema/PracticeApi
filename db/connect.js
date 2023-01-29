const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const ConnectEstabish =(uri)=>{
    try{
        return mongoose.connect(uri)
    }
   catch(error){
    console.log(`........connect.js ...................error ${error}`)
   }
}

module.exports = ConnectEstabish
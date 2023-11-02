const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://dheeraj7000:Rajul98@cluster0.eispjzy.mongodb.net/NEWDB?retryWrites=true&w=majority";

const connectTOMongo=()=>
{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected TO Mongo successfull");
    })
}
module.exports = connectTOMongo;
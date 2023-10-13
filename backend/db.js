const mongoose = require('mongoose');
const mongoURI = process.env.DBURI;

const connectTOMongo=()=>
{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected TO Mongo successfull");
    })
}
module.exports = connectTOMongo;
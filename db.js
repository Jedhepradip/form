const mongoose = require("mongoose");

const mongoURL = 'mongodb://127.0.0.1:27017/instgram'

mongoose.connect(mongoURL,{
 useNewUrlParser:true,
 useUnifiedTopology:true
})

const db = mongoose.connection;

// even listeners
// This is a Event listeners KeyWord

db.on("connected",()=>{
    console.log(`Connected To MongoDB Server `);
})
db.on("error",()=>{
    console.log(`MongoDB connection Error`);
})
db.on("disconnected",()=>{
    console.log(`MongoDB Disconnected`);
})

module.exports = db;

//git 

// const { listeners } = require("./route/user");

// const mongoURL = 'mongodb://localhost:27017/instgram'
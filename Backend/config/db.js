require("dotenv").config();
const mongoose=require("mongoose");
const db = 'mongodb+srv://User:User@waghur.r7fwr.mongodb.net/WaghurDB?retryWrites=true&w=majority';
mongoose.connect(db).then(() => console.log("connection is sucessful.....")).catch((err) => console.log(err))

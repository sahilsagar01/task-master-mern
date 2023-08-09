require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5003;
const MongoDb = process.env.DB
console.log(MongoDb)
const connectToMongoose = async(params) => {
   try {
    await mongoose.connect("mongodb://localhost:27017/taskDB")
   }
   catch(err){
    console.log(err)
   }
}
connectToMongoose();

app.use('/', require('./router/taskRouter'))


app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
});
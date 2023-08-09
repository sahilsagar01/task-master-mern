require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const PORT = 5003;
const connectToMongoose = async(params) => {
   try {
    await mongoose.connect(process.env.DB)
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
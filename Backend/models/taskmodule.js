const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    discription: String,
    status: String
})

const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;
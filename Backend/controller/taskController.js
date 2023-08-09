const Task = require("../models/taskmodule");

// create task---------------------------------------------
const createTask = async (req, res) => {
  const data = req.body;
  const newTask = new Task({
    title: data.title,
    discription: data.discription,
    status: data.status,
  });
  newTask
    .save()
    .then((doc, err) => {
      res.send([doc, "Task successfully created"]);
      console.log(doc);
    })
    .catch((err) => {
      res.send(err);
    });
};
// all task-----------------------------------------------
const getAllTasks = async (req, res) => {
  const allTasks = Task.find()
    .then((doc, err) => {
      res.send(doc);
    })
    .catch((err) => {
      res.send(err.message);
    });
};

const deleteAllTasks = (req, res) => {
  Task.deleteMany()
    .then(() => {
      res.send("SuccessFully deleted all tasks");
      console.log("SuccessFully deleted all tasks");
    })
    .catch((err) => {
      res.send(err);
    });
};
// specific task---------------------------------------------
const getTask = (req, res) => {
  const titleName = req.params.name;

  Task.findOne({ title: titleName })
    .then((doc, err) => {
      if (!doc) {
        res.send("Task not found");
        console.log("Task not found");
      } else {
        res.send(doc);
      }
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

const updateTask = (req, res) => {
  Task.findOneAndUpdate(
    { _id: req.params.id },
    {
      title: req.body.title,
      discription: req.body.discription,
      status: req.body.status,
    },
    { overwrite: true }
  )
    .then((doc, err) => {
      if (!doc) {
        res.send("Task not found");
        console.log("Task not found");
      } else {
        res.send("Task changed");
        console.log("Task changed");
      }
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

const editTask = (req, res) => {
  Task.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then((doc, err) => {
      console.log(doc, "line 89 from edit task");
      if (!doc) {
        res.send("Task not found");
      } else {
        res.send("Task updated");
        console.log("Task updated");
      }
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

const deleteTask = (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then((err) => {
      if (!err) {
        res.send("Task not found");
        console.log("Task not found");
      } else {
        res.send("Task deleted");
      }
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports = {
  createTask,
  getAllTasks,
  deleteAllTasks,
  getTask,
  updateTask,
  editTask,
  deleteTask,
};

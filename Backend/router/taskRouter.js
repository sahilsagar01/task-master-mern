const router = require('express').Router();
const {createTask, getAllTasks, deleteAllTasks, getTask, updateTask, editTask, deleteTask} = require("../controller/taskController");

router.post('/post', createTask);
router.get('/', getAllTasks);
router.delete('/delete', deleteAllTasks)
router.get('/:name', getTask);
router.put('/put/:id' , updateTask);
router.patch('/patch/:id', editTask);
router.delete('/delete/:id', deleteTask)


module.exports = router;

import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

function Task(props) {

    const handleUpdate = async() => {
      try{
        const allData = await axios.get("https://mern-task-master.onrender.com:5003");
        const dbId = allData.data[props.id]._id
        props.onupdate(props.id, dbId);
      }
      catch(err){
        console.log(err)
      }
    }
const handlclick = async() => {
    props.ondelete(props.id, props.dbId)
}

  return (
    <div className="task">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button onClick={handlclick} ><DeleteIcon /></button>
      <span>{props.status}</span>
      <button onClick={handleUpdate} ><CheckCircleIcon /></button>
    </div>
  )
}

export default Task;
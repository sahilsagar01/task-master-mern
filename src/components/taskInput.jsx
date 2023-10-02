import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import AddIcon from '@mui/icons-material/Add';

function TaskInput(props) {
  const [task, setTask] = useState({
    title: "",
    discription: "",
    status: "⌛Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((pV) => {
      return {
        ...pV,
        [name]: value,
      };
    });
  };

  const handleClick = (evt) => {
    props.onAdd(task);
    setTask({
      title: "",
      discription: "",
      status: "⌛Pending",
    });
    evt.preventDefault();
  };
  return (
    <>
      {props.inputSkeleton ?
        (
        <div>
          <form className="create-note">
            <input
              onChange={handleChange}
              className="input-form"
              name="title"
              placeholder="Title"
              value={task.title}
            />
            <textarea
              onChange={handleChange}
              className="input-text"
              name="discription"
              placeholder="Take a task..."
              rows="3"
              value={task.discription}
            />
            <button onClick={handleClick} className="input-btn">
              <AddIcon />
            </button>
          </form>
        </div>
      )
        : (
        <div>
          <form className="create-note">
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              <Skeleton variant="rounded" height={80} />
            </Stack>
            <Skeleton
              className="button"
              variant="circular"
              width={40}
              height={40}
            />
          </form>
        </div>
      )}
    </>
  );
}

export default TaskInput;

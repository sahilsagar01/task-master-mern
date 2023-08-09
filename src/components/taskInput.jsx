import React, { useState } from "react";

function TaskInput(props) {
  const [task, setTask] = useState({
    title: "",
    discription: "",
    status: "⌛Pending"
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
      status: "⌛Pending"
    });
    evt.preventDefault();
  };
  return (
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
          add
        </button>
      </form>
    </div>
  );
}

export default TaskInput;

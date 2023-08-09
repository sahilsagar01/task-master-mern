import React from "react";
import Task from "./task";



function TaskSection(props) {
  const { allTasks, onDelete, onUpdate } = props;

  const handleDelete = async (id, dataId) => {
    onDelete(id, dataId);
  };
  const handleUpdate = async (id, dataId) => {
    onUpdate(id, dataId);
  };

  return (
     <div>
       <section id="tasks" className="all-tasks">
        <h1>All Tasks</h1>
        {allTasks.map((items, index) => {
          return (
            <Task
              key={index}
              id={index}
              dbId={items._id}
              title={items.title}
              description={items.discription}
              status={items.status}
              ondelete={handleDelete}
              onupdate={handleUpdate}
            />
          );
        })}
      </section>
     </div>
  );
}

export default TaskSection;

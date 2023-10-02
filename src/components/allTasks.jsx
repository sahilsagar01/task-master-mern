import React, { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Task from "./task";

function TaskSection(props) {
  const { allTasks, onDelete, onUpdate, skeleton } = props;

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
        {skeleton ? (
          allTasks.map((items, index) => {
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
          })
        ) : (
          [1,1,1].map(item =>{
            return <div className="task">
            <Stack spacing={1}>
              <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
              <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
              <div className="task_footer">
              <Skeleton 
              className="taskCont"
              variant="circular"
              width={25}
              height={25} />
              <Skeleton variant="rounded" width={100} height={30} />
              </div>
            </Stack>
          </div>
          })
        )}
      </section>
    </div>
  );
}

export default TaskSection;

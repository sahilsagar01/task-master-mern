import React, {useState, useEffect} from "react";
import TaskBar from "../components/navigation";
import Introduction from "../components/tasks_section";
import TaskSection from "../components/allTasks";
import axios from "axios";
function Home(){
    const [allTasks, setAllTasks] = useState([]);
    const [action, setAction] = useState("")


    const updateItem = async (id, dataId) =>{
        try{
            const api = `https://mern-task-master.onrender.com:5003/patch/${dataId}`;
            await axios.patch(api,{
                status: "🟢completed"
            })
            setAction(dataId)
        }
        catch(err){
            console.log(err)
        }
    }
    const deleteItem = async(id, dataId) =>{
        try{
            const api = `https://mern-task-master.onrender.com:5003/delete/${dataId}`;
            await axios.delete(api);
            setAllTasks(pV => {
                return pV.filter((item , index) => {
                  return index !== id;
                })
              })
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() => {
        const fatchTasks = async () => {
          try {
            const api = `https://mern-task-master.onrender.com:5003`;
            const Tasks = await axios.get(api);
            setAllTasks(Tasks.data);
          } catch (err) {
            console.log(err);
          }
        };
        fatchTasks();
      }, [action]);

    return(
       <div>
         <TaskBar />
        <Introduction  allTasks={allTasks} setAllTasks={setAllTasks} />
        <TaskSection
         onDelete={deleteItem} 
         allTasks={allTasks} 
         setAllTasks={setAllTasks}
         onUpdate={updateItem}
         />
       </div>
    )
}

export default Home;
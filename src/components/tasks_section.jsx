import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeAnime from "./typing_anime";
import TaskInput from "./taskInput";
import axios from "axios";

function Introduction(props) {
const {setAllTasks} = props


  const addNewItem = async(newTask) => {
    try{
      const api = "http://13.239.136.155:5003/post"
      await axios.post(api,{
      title: newTask.title,
      discription: newTask.discription,
      status: newTask.status
    })
    setAllTasks(pV => {
      return [...pV, newTask]
    });
    }
    catch(err){
      console.log(err)
    }
  }


  return (
    <Container>
      <Row>
        <Col className="left-cont" md={6}>
         <div>
         <img
            className="IntroImg"
            src="https://img.freepik.com/premium-vector/afro-traveler-man-walking-scene_18591-75631.jpg?w=826"
            alt="mountin man"
          />
          </div>
          <div className="header-p-cont">
            <h1 className="headingPeragraph">
              Hello, i am <span>Sahil</span>
            </h1>
            <h1 className="headingPeragraph">welcome to <span>Task Master</span>.</h1>
            <h1 className="headingPeragraph">Here, you can </h1>
            <TypeAnime />
          </div>
         
        </Col>
        <Col className="right-cont" md={6}>
          <Row>
            <TaskInput 
            onAdd={addNewItem} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Introduction;

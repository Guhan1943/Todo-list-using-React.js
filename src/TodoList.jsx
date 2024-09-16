import React ,{useState} from 'react';
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";


function TodoList(){
  const [task,setTask] = useState([]);
  const [newTask ,setNewTask] = useState("");

  function HandleInputChange(event){
    setNewTask(event.target.value)
    document.getElementById("task-input").value = ""
  }

  function HandleAddTask(){
    setTask([...task,newTask])
    setNewTask("")
  }

  function HandleRemoveTask(index){
    setTask(task.filter((_,i)=>i != index))
  }

  function HandleMoveUpTask(index){
    if(index > 0){
      const updatedTask = [...task];
      [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
      setTask(updatedTask);
    }
  }

  function HandleMoveDownTask(index){
    if(index < task.length-1){
      const updatedTask = [...task];
      [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
      setTask(updatedTask);
    }

  }
  

  return(
    <div className="task-container">
      <h1 className='task-heading'>Todo List</h1>
      <div className="input-container">
        <input value={newTask} id="task-input" placeholder='Enter the task' onChange={HandleInputChange} />
      <button id='add-button' onClick={HandleAddTask}>Add</button>
      </div>
      
      <ol>
        {task.map((task,index)=><li key={index} className='task-list'><span className='task'>{task}</span>
                                                <button id='delete-button' onClick={() => HandleRemoveTask(index)}><MdDeleteForever /></button>
                                                <button id='move-button' onClick={() => HandleMoveUpTask(index)}><FaArrowCircleUp /></button>
                                                <button id='move-button' onClick={() => HandleMoveDownTask(index)}><FaArrowCircleDown /></button><br />
                                                </li>)}
      </ol>
    </div>
  );
}

export default  TodoList
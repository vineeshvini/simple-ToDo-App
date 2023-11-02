import React from "react";
import "./App.css";
import { useState } from "react";


function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
 const DeleteToDo =(ToDoValue)=>{
let reducetodo = [...toDos];
reducetodo.splice(ToDoValue)
setTodos(reducetodo)
 }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => setTodos([...toDos, {id:Date.now(), text:toDo ,status:false}])}
          className="fas fa-plus"
          
        ></i>
        

      

      </div>

      
      <div className="todos">
        {toDos.map((ToDoValue) => {
          return (
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                 console.log(e.target.checked)
                 console.log(ToDoValue)
                 setTodos(toDos.filter(checkedValue=>{
                  if(checkedValue.id===ToDoValue.id){
                    checkedValue.status=e.target.checked
                  }
           
                  return checkedValue
                 }));
                }} ToDoValue={ToDoValue.value} type="checkbox" name="" id="" />
                <p>{ToDoValue.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>DeleteToDo(ToDoValue)} className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
}

export default App;

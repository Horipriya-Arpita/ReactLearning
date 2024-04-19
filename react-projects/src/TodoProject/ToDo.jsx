import { useState } from "react";
import "./toDo.css"

const ToDo = () => {
  const [input,setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const remove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("u typed " + e.target.value);
  }

  const addList = () => {
    if (input.trim() !== "") { // Check if the input is not empty or only whitespace
      setTodos(todos => [...todos, {id: Math.floor(Math.random() * 100), todo: input}]);
      setInput(""); // Clear the input field after adding the todo
    }
  }
  return (
    <>
      <div className="container">
        <h1 className="TodoList">To Do Lists</h1>
        <div className="add-container">
        <input type="text" value={input} onChange={handleChange}/>
        <button onClick = {addList} className="Add">Add Todo</button>
        </div>

        <div className="todos-container">
          
        todos.map(({todo,id}) => 
        (<ul key={id}>
          <li>{todo}</li><button onClick={()=>remove(id)}>X</button>
        </ul>))
          
        </div>
      </div>
    </>
  )
}

export default ToDo

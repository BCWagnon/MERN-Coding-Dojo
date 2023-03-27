import './App.css';
import React, { useState } from 'react';

function App() {

const [todo, setTodo] = useState("");
const [todoList, setTodoList] = useState ([]);

const handleTodoSubmit = (e) => {
  e.preventDefault();

  
  if (todo.length > 0){ 
    const todoItem = {
      text: todo,
      complete: false
    }

    setTodoList([...todoList, todoItem]);
    setTodo("");
  } else{
    return;
  }
  }


const handleTodoDelete = (delIndex) => {
  const filteredTodoList = todoList.filter((todo, i) => {
    return i !== delIndex;
  })


  setTodoList(filteredTodoList);
}

const handleTodoComplete = (index) => {
  const updatedTodoList = todoList.map((todo, i) =>{
    if (index ===i) {
      const updatedTodo = { ...todo, complete: !todo.complete };
      return updatedTodo
    }
    return todo;
  });

  setTodoList(updatedTodoList);
}


  return (
  <div>
    <form onSubmit = {(e) => {
      handleTodoSubmit(e);
    }}>
      <input type="text" value={todo} onChange={(e) => {
        setTodo(e.target.value);
      }} />
      <div>
        <button>Add</button>
      </div>
    </form>

      {todoList.map((todo, i) => {
        const todoClasses = [];

          if (todo.complete) {
            todoClasses.push("line-through");
          }
        return (
          <div key={i}>
            <span className={todoClasses.join(" ")}>{todo.text} </span>
            <input type= "checkbox" checked={todo.complete} onChange={(e) => {
              handleTodoComplete(i);
            }}/>
            <button onClick={(e) => {
              handleTodoDelete(i);
            }}>Delete</button>
            </div>
        )
      })}

  </div>
  );
}

export default App;

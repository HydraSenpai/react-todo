import React, { Component } from 'react';

const TodoList = ['sleep'];

export default function Card() {
  const [todo, setTodo] = React.useState(TodoList);
  
  const addTodo = () => {
    setTodo([...todo, 'die']);
  }

  const clearTodo = () => {
    setTodo([]);
  }

    return (
      <div className="card">
        <h1>To-do List</h1>
        <div className="todoList">

          {todo.map((todo) => {
            return (<h2 key={Math.random(100)}>{todo}</h2>) 
          })}

        </div>
        <input type='text'></input>
        <button onClick={addTodo}>Add to-do</button>
        <button onClick={clearTodo}>Clear</button>
      </div>
    )
}










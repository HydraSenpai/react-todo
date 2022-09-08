import React, { Component } from 'react';
import uuidv4 from '../node_modules/uuid/dist/v4';

const TodoList = ['sleep'];

export default function Card() {
  const [todo, setTodo] = React.useState(TodoList);
  
  const addTodo = () => {
    const input = document.getElementById("input");
    if(input.value == ''){
      return;
    }
    setTodo([...todo, input.value]);
    input.value = '';
  }

  const clearTodo = () => {
    setTodo([]);
  }

    return (
      <div className="card">
        <h1>To-do List</h1>
        <div className="todoList">

          {todo.map((todo) => {
            return (
              <div className="todo__item" key={uuidv4()}>
                  <input type='checkbox' className='todo__item-check'></input>
                  <h3 className='todo__item-name'>{todo}</h3>
              </div>
            );
          })}

        </div>
        <input type='text' id='input'></input>
        <button onClick={addTodo}>Add to-do</button>
        <button onClick={clearTodo}>Clear</button>
      </div>
    )
}










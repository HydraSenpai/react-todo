import React, { useEffect, useState } from 'react'


const TodoList = [];

 let counter = 0;

export default function Card() {
  
  const [todo, setTodo] = useState(TodoList);
 
  
  useEffect(() => {
    const data = localStorage.getItem("myTodo");
    if(data){
      setTodo(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("myTodo", JSON.stringify(todo));
  });
 
  const addTodo = () => {
    const input = document.getElementById("input");
    if(input.value === ''){
      return;
    } else {
      if(todo.length === 0){
        counter = +localStorage.getItem("counter");
        setTodo([{id:counter, name:input.value,checked:false}]);
        input.value = '';
      } else {
        counter = +localStorage.getItem("counter");
        setTodo([...todo, {id:counter, name:input.value,checked:false}]);
        input.value = '';
      }
      let count = counter;
      count++;
      localStorage.setItem("counter", count);
    }
  }

  const clearTodo = () => {
    setTodo([]);
    counter=0;
    localStorage.setItem("counter", counter);
  }

  function handleInputChange(event, todos){
    todos.checked = !todos.checked;
    event.target.checked = todos.checked;
    let num = 0;
    //console.log(todos);
    todo.forEach((element) => {
      if(element.id === todos.id){
        todo.splice(num, 1);
      }
      num ++;
    })
    //console.log(todo);
    todo.splice(0, 0, todos);
    let newArray = todo.map(todos => ({...todos}))
    console.log(newArray);
    setTodo(newArray);
  }    

  return (
    <div className="card">
      <h1>To-do List</h1>
      <div className="todoList">

      {todo.map((todos) => {
        const {id, name, checked} = todos;
        return ( 
            <div key={id} className="todo__item">
                <input type='checkbox' id={id} onChange={event => handleInputChange(event,todos)} checked={checked} className='todo__item-check'></input>
                <h3 className='todo__item-name'>{name}</h3>
            </div>
          );
      })}
        
      </div>
      <input type='text' id='input'></input>
      <button onClick={addTodo}>Add to-do</button>
      <button onClick={clearTodo}>Clear All</button>
    </div>
  );
}










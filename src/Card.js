import React, { Component } from 'react';

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <h1>To-do List</h1>
        <div className='todoList'>
            List item 1
        </div>
        <input type='text'></input>
        <button>Add to-do</button>
        <button>Clear</button>
      </div>
    )
  }
}

export default Card

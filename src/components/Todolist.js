import React, { Component } from 'react'
import Todo from './Todo'
const Todolist=(props)=>{
    return (
        <div className="todo-container">
      <ul className="todo-list">
            {
                props.todos.map((t)=>(<Todo key={t.id} todo={t}/>))
            }
          {/* <Todo />
          <Todo />
          <Todo /> */}
      </ul>
    </div>
    )
}
export default Todolist;
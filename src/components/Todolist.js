import React, { Component } from 'react'
import Todo from './Todo'
const Todolist=(props)=>{
    return (
        <div className="todo-container">
      <ul className="todo-list">
            {
                props.todos.map((t)=>(<Todo setTodos={props.setTodos} key={t.id} todo={t} todos={props.todos}/>))
            }
          {/* <Todo />
          <Todo />
          <Todo /> */}
      </ul>
    </div>
    )
}
export default Todolist;
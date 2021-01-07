import React, { Component } from 'react'
import Todolist from './Todolist';

const Form=(props)=>{
    const inputtexthandler=(e)=>{
        console.log(e.target.value);
        props.setInputText(e.target.value);

    }
    const submittodo=(e)=>{
        e.preventDefault();
        props.setTodos([...props.todos,
            {text:props.inputtext,completed:false,id:Math.random()*1000}
        ])
        props.setInputText("");
    }
    const statusHandler=(e)=>{
        props.setStatus(e.target.value);
        console.log(e.target.value);
    }
    return(
        <form>
      <input value={props.inputtext} onChange={inputtexthandler} type="text" className="todo-input" />
      <button onClick={submittodo} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

export default Form;
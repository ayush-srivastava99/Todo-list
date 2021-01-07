
import React,{useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';




function App() {

  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  const [filteredTodos,setFilter]=useState([]);
  
  useEffect(()=>{
    getLocal();
  },[]);

  useEffect(()=>{
    filterHandle();
    saveToLocal();
  },[todos,status]);
  
  const filterHandle=()=>{
    switch(status){
      case "completed":
        setFilter(todos.filter((todo)=> todo.completed===true))
        break;
      case "uncompleted":
        setFilter(todos.filter((todo)=>todo.completed===false))
        break;
      default:
        setFilter(todos);
        break;
    }
  } 

  const saveToLocal=()=>{
      localStorage.setItem('todos',JSON.stringify(todos));
  }

  const getLocal=()=>{
    if(localStorage.getItem('todos')===null){
      localStorage.setItem('todos',JSON.stringify([]));
    }
    else
    {
      let local=JSON.parse(localStorage.getItem('todos'));
      setTodos(local);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Ayush's Todo List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} setInputText={setInputText} inputtext={inputText} />
      <Todolist status={status} setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;

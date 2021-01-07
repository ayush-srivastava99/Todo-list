
import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';




function App() {
  const [inputText,setInputText]=useState("");
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState("all");
  return (
    <div className="App">
      <header>
        <h1>Ayush's Todo List</h1>
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} setInputText={setInputText} inputtext={inputText} />
      <Todolist status={status} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

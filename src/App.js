import React , {useState}from 'react';
import './App.css';
// Importing components 
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText , setInputText] = useState("");
  const [todos , setTodos] = useState ([


  ]);

  return (
    <div className="App">
      <header>
        <h1>To Do List </h1>
      </header>
      <Form 
      inputText={inputText}
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
    
  );
}

export default App;

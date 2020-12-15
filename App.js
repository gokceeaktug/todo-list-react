import React from 'react' ; 
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app" >
      <h1>To Do List </h1>
      <div className='todo-app'>
       <TodoList></TodoList>
      </div>
     
    </div>
  );
}

export default App;

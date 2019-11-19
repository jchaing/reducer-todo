import React from 'react';
import TodoList from '../src/components/TodoList';
import './App.css';
import '../src/components/Todo.css';

function App() {
  return (
    <div className="App">
      <h1>Reducer Todo</h1>
      <TodoList />
    </div>
  );
}

export default App;

import React from 'react';
import TodoList from '../src/components/TodoList';
import { Container } from 'reactstrap'
import './App.css';
import '../src/components/Todo.css';

function App() {
  return (
    <Container className="bg-dark w-50 p-3 mt-4">
      <h1 className="text-light">Reducer Todo</h1>
      <TodoList />
    </Container>
  );
}

export default App;

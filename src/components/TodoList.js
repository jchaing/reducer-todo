import React, { useReducer, useState } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoName, setTodoName] = useState('');
  console.log(state);

  const handleChange = e => {
    setTodoName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setTodoName('');
  };

  return (
    <div>
      <h2>List</h2>
      {state.map(todo => (
        <Todo
          key={todo.id}
          item={todo.item}
          dispatch={dispatch}
          id={todo.id}
          completed={todo.completed}
        />
      ))}
      <TodoForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        dispatch={dispatch}
        todoName={todoName}
      />
    </div>
  );
};

export default TodoList;

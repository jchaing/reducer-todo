import React, { useReducer, useState } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import { initialState, todoReducer } from '../reducers/todoReducer';
import { ListGroup } from 'reactstrap';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoName, setTodoName] = useState('');
  console.log(state);

  const handleChange = e => {
    setTodoName(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (todoName !== '') {
      dispatch({ type: 'ADD', item: todoName }); 
      setTodoName('');
    }
  };

  return (
    <div>
      <ListGroup>
        {state.map(todo => (
          <Todo
            key={todo.id}
            item={todo.item}
            dispatch={dispatch}
            id={todo.id}
            completed={todo.completed}
          />
        ))}
      </ListGroup>
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

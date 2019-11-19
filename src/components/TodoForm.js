import React from 'react';

const TodoForm = ({ handleChange, dispatch, todoName, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        placeholder={'Enter new todo here'}
        value={todoName}
      />
      <button onClick={() => dispatch({ type: 'ADD', item: todoName })}>Add</button>
    </form>
  );
}

export default TodoForm;
import React from 'react';

const Todo = ({ item, id, completed, dispatch }) => {
  return (
    <div
      className={`todo${completed ? ' completed' : ''}`}
      onClick={() =>
        dispatch({ type: 'TOGGLE_TODO', completed: completed, id: id })
      }
    >
      {item}
    </div>
  );
};

export default Todo;

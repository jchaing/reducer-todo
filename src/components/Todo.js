import React from 'react';

const Todo = ({ item, id, completed, dispatch }) => {
  const handleClick = e => {
    e.preventDefault();
    console.log(e);
  };
  console.log(item);
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

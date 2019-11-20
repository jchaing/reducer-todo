import React from 'react';
import { ListGroupItem } from 'reactstrap';

const Todo = ({ item, id, completed, dispatch }) => {
  return (
    <ListGroupItem
      className={`todo${
        completed ? ' completed' : ''
      } bg-light font-weight-bold text-primary`}
      onClick={() =>
        dispatch({ type: 'TOGGLE_TODO', completed: completed, id: id })
      }
    >
      {item}
    </ListGroupItem>
  );
};

export default Todo;

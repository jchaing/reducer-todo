import React from 'react';
import { Form, Button, InputGroup, Input } from 'reactstrap';

const TodoForm = ({ handleChange, dispatch, todoName, handleSubmit }) => {
  return (
    <div>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            onChange={handleChange}
            placeholder={'Enter new todo here'}
            value={todoName}
          />
          <Button color="success" onClick={() => dispatch({ type: 'ADD', item: todoName })}>
            Add
          </Button>
        </InputGroup>
      </Form>
      <Button
        className="mt-4"
        color="danger"
        onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
      >
        Clear Completed
      </Button>
    </div>
  );
};

export default TodoForm;

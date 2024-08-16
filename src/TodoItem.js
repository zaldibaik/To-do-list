import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo.id)} 
          className="me-2"
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
          {todo.text}
        </span>
      </div>
      <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;

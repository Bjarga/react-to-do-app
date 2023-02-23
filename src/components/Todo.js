import React from "react";

import { useDispatch } from "react-redux";
import { DELETE_TODO } from "../store/actionType";

const Todo = ({ todo, handleUpdate }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  return (
    <li className="list-item">
      <h4>{todo.text}</h4>
      <p>{todo.description}</p>
      <div className="btn-container">
        <button className="edit-btn" onClick={() => handleUpdate(todo)}></button>
        <button className="delete-btn" onClick={() => handleDelete(todo.id)}></button>
      </div>
    </li>
  );
};

export default Todo;

import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import { DELETE_TODO } from "./store/actionType";

function App() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const todos = useSelector((state) => state.todos); // Update this line
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setUpdateData(null);
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO, payload: id });
  };

  const handleUpdate = (todo) => {
    setUpdateData(todo);
    handleOpen();
  };

  return (
    <div className="center-page-container">
      <div className="App">
        <h2>To-Do-List</h2>
        <button className="submitBtn" onClick={handleOpen}>
          Add to List
        </button>

        <TodoForm open={open} handleClose={handleClose} todo={updateData} />
        <ul className="list-container">
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

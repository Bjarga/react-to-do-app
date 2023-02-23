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

// import React, { useState } from "react";
// import "../App.css";

// //Function component redering one to do item as per three props
// const Todo = ({ todo, handleDelete, handleUpdate }) => {
//   //creating state for a done item line through
//   const [done, setDone] = useState(false);

//   //Function changing the state to toggle between false and true
//   const handleDone = () => {
//     if (done === false) {
//       return setDone(true);
//     } else if (done === true) {
//       return setDone(false);
//     }
//   };
//   return (
//     <ul>
//       {/*using turnery operator to change item text to strike through based on state*/}
//       <li className="listItem" style={done === true ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
//         {todo.title}
//       </li>

//       <button className="edit-btn" onClick={() => handleUpdate(todo)}>
//         edit
//       </button>
//       <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
//         delete
//       </button>
//       <button className="delete-btn" onClick={handleDone}>
//         Done
//       </button>
//     </ul>
//   );
// };

// export default Todo;

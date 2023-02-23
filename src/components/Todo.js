import React, { useState } from "react";
import "../App.css";

const Todo = ({ todo, handleDelete, handleUpdate }) => {
  const [done, setDone] = useState(false);

  const handleDone = () => {
    if (done === false) {
      return setDone(true);
    } else if (done === true) {
      return setDone(false);
    }
  };

  return (
    <ul>
      <li className="listItem" style={done === true ? { textDecoration: "line-through" } : { textDecoration: "none" }}>
        {todo.content}
      </li>

      <button className="edit-btn" onClick={() => handleUpdate(todo)}>
        edit
      </button>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}>
        delete
      </button>
      <button className="delete-btn" onClick={handleDone}>
        Done
      </button>
    </ul>
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

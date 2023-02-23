import React, { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import { useDispatch, useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import { DELETE_TODO } from "./store/actionType";
import ReduxProvider from "./store/ReduxProvider";

function App() {
  const [open, setOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const todos = useSelector((state) => state.todos);
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
    <ReduxProvider>
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
    </ReduxProvider>
  );
}

export default App;

// import React, { useState } from "react";
// import "./App.css";
// import Todo from "./components/Todo";
// import { useDispatch, useSelector } from "react-redux";
// import TodoForm from "./components/TodoForm";
// import { DELETE_TODO } from "./store/actionType";

// // main component App importing the two Components needed to display app
// function App() {
//   // state to manage the opening and closing of the TodoForm component
//   const [open, setOpen] = useState(false);

//   //state to updateData to store the data to be updated when the edit button is clicked
//   const [updateData, setUpdateData] = useState(null);

//   const todos = useSelector((state) => state.todos);
//   const dispatch = useDispatch();

//   // 2 function to handle opening and closing of the todoForm
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//     setUpdateData(null);
//   };

//   // function to handle the deleting of an item
//   const handleDelete = (id) => {
//     dispatch({ type: DELETE_TODO, payload: id });
//   };

//   // function to handle the updating of an item
//   const handleUpdate = (todo) => {
//     setUpdateData(todo);
//     handleOpen();
//   };

//   //component returns the app's UI
//   return (
//     <div className="center-page-container">
//       <div className="App">
//         <h2>To-Do-List</h2>
//         <button className="submitBtn" onClick={handleOpen}>
//           Add to List
//         </button>

//         <TodoForm open={open} handleClose={handleClose} todo={updateData} />
//         <ul className="list-container">
//           {todos.map((todo, index) => (
//             <Todo key={index} todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

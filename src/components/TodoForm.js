import React, { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import { useDispatch } from "react-redux";
import { ADD_TODO, UPDATE_TODO } from "../store/actionType";

const initialState = { content: "", completed: false };

// To do Form function
const TodoForm = ({ open, handleClose, todo }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const { content, completed } = formData;

  useEffect(() => {
    if (todo) {
      setFormData(todo);
    } else {
      setFormData(initialState);
    }
  }, [todo]);

  // input change function
  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setFormData({ ...formData, [key]: value });
  };

  // reset form input function
  const resetFormData = () => {
    setFormData(initialState);
  };

  // handle form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.random().toString(36).substring(2, 8);
    dispatch({
      type: ADD_TODO,
      payload: {
        [id]: {
          content: content,
          completed: false,
        },
      },
    });
    resetFormData();
    handleClose();
  };

  // updating list function
  const handleUpdate = () => {
    dispatch({
      type: UPDATE_TODO,
      payload: {
        [todo.id]: {
          content: content,
          completed: completed,
        },
      },
    });
    resetFormData();
    handleClose();
  };

  // return statement returns a Dialog component that displays a form
  return (
    <Dialog open={open}>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2>{todo ? "Edit List" : "Add to List"}</h2>
        <input id="content" value={content} required onChange={(e) => handleInputChange(e, "content")} />

        <div className="btn-container">
          <button className="modal-btn" onClick={handleClose}>
            Cancel
          </button>
          {todo ? (
            <button className="modal-btn" onClick={handleUpdate}>
              Confirm
            </button>
          ) : (
            <button className="modal-btn" type="submit">
              Create
            </button>
          )}
        </div>
      </form>
    </Dialog>
  );
};

export default TodoForm;

// //importing needed components
// import React, { useEffect, useState } from "react";
// import Dialog from "@mui/material/Dialog";
// import { useDispatch } from "react-redux";
// import { ADD_TODO, UPDATE_TODO } from "../store/actionType";
// const initialState = { title: "" };

// //To do Form function
// const TodoForm = ({ open, handleClose, todo }) => {
//   const dispatch = useDispatch();
//   const [formData, setFormData] = useState(initialState);
//   const { title } = formData;
//   useEffect(() => {
//     if (todo) {
//       setFormData(todo);
//     } else {
//       setFormData(initialState);
//     }
//   }, [todo]);

//   //input change function
//   const handleInputChange = (e, key) => {
//     const { value } = e.target;
//     setFormData({ ...formData, [key]: value });
//   };

//   // reset form input function
//   const resetFormData = () => {
//     setFormData(initialState);
//   };

//   //handle form submit function
//   const handleSubmit = () => {
//     dispatch({ type: ADD_TODO, payload: { id: Math.random(), ...formData } });
//     resetFormData();
//     handleClose();
//   };

//   //updating list function
//   const hanldeUpdate = () => {
//     dispatch({ type: UPDATE_TODO, payload: formData });
//     resetFormData();
//     handleClose();
//   };

//   //return statement returns a Dialog component that displays a form
//   return (
//     <Dialog open={open}>
//       <form className="form-container" onSubmit={handleSubmit}>
//         <h2>{todo ? "Edit List" : "Add to List"}</h2>
//         <input id="title" value={title} required onChange={(e) => handleInputChange(e, "title")} />

//         <div className="btn-container">
//           <button className="modal-btn" onClick={handleClose}>
//             Cancel
//           </button>
//           {todo ? (
//             <button className="modal-btn" onClick={hanldeUpdate}>
//               Confirm
//             </button>
//           ) : (
//             <button className="modal-btn" onClick={handleSubmit}>
//               Create
//             </button>
//           )}
//         </div>
//       </form>
//     </Dialog>
//   );
// };

// export default TodoForm;

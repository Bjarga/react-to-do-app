import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

const initialState = {
  nextId: 2,
  data: {
    1: {
      content: "Content 1",
      completed: false,
    },
  },
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return {
        nextId: state.nextId + 1,
        data: {
          ...state.data,
          [state.nextId]: {
            content: payload.content,
            completed: false,
          },
        },
      };

    case DELETE_TODO:
      const { [payload]: deletedTodo, ...remainingTodos } = state.data;
      return { nextId: state.nextId, data: remainingTodos };

    case UPDATE_TODO:
      return {
        nextId: state.nextId,
        data: {
          ...state.data,
          [payload.id]: {
            ...state.data[payload.id],
            content: payload.content,
            completed: payload.completed,
          },
        },
      };

    default:
      return state;
  }
};

// import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionType";

// // initail state with some data
// const initialState = {
//   todos: [
//     {
//       id: 1,
//       title: "Walk the dog",
//     },
//     {
//       id: 2,
//       title: "Sort out the Garage",
//     },
//     {
//       id: 3,
//       title: "Send application letters",
//     },
//   ],
// };

// export const reducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     //reducer returns a new state object containing all existing items and new items from the payload
//     case ADD_TODO:
//       return { todos: [...state.todos, payload] };

//     //reducer returns a new state object containing all existing items except one with id specified by payload
//     case DELETE_TODO:
//       return { todos: state.todos.filter((todo) => todo.id !== payload) };

//     //reducer returns a new state object containing all existing items and updated items from the payload
//     case UPDATE_TODO:
//       return {
//         todos: state.todos.map((todo) => {
//           if (todo.id === payload.id) {
//             return payload;
//           }
//           return todo;
//         }),
//       };

//     // returns old state if action is not recognised
//     default:
//       return state;
//   }
// };

// const initialState = {
//   nextId: 2,
//   data: {
//     1: {
//       content: "Content 1",
//       completed: false,
//     },
//   },
// };

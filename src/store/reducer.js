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

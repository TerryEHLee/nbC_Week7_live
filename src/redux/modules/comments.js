// import uuid from "react-uuid";
import shortid from "shortid";

const initialState = [{ comment: 1 }];

// 리듀서
const comments = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COM":
      return [...state, action.payload];

    case "DELETE_COM":
      return state.filter((todo) => todo.id !== action.payload);

    case "SWITCH_COM":
      return state.map((comment) => {
        if (comment.id === action.payload) {
          return { ...comment, isDone: !comment.isDone };
        } else {
          return comment;
        }
      });

    default:
      return state;
  }
};

export default comments;

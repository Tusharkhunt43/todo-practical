import {
    ADD_TODO,
    DELETE_TODO,
    TOGGLE_TODO
  } from "../constants";
  
  const initalState = {
    counter: 0,
    list: []
  };
  
  const todoReducer = (state = initalState, action) => {
    switch (action.type) {
      case ADD_TODO:
        return {
          counter: state.counter + 1,
          list: [
            ...state.list,
            { id: state.counter + 1, text: action.text, completed: false }
          ]
        };

      case DELETE_TODO:
        return {
          ...state,
          list: state.list.filter(item => item.id !== action.id)
        };
      case TOGGLE_TODO:
        return {
          ...state,
          list: state.list.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
        };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  
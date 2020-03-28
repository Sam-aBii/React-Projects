import {createStore} from "redux"


function Todo(state = {
    name: "Abid"
}, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        text: "TODO_ADDED"
      };
    case "DELETE_TODO":
      return {
        ...state,
        text: "TODO_DELETED"
      };
    default:
        return {
            ...state
        }
  }
}

const Store = createStore(Todo,{})

Store.dispatch({
  type: "ADD_TODO"
}) 

console.log(Store.getState());


export default Store;

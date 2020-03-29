import { createStore, combineReducers } from "redux"


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


function User(state = {
    name: "Abid"
}, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        user: "USER_ADDED"
      };
    case "DELETE_USER":
      return {
        ...state,
        user: "USER_DELETED"
      };
    default:
        return {
            ...state
        }
  }
}


const rootReducer = combineReducers({
  Todo,
  User
})

const Store = createStore(rootReducer,{}) 

Store.dispatch({
  type: "ADD_TODO"
})


export default Store;

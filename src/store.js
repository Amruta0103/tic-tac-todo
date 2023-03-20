import { createStore, compose} from "redux";
import rootReducer from "./reducer";
import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";

const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const store = createStore(rootReducer, undefined, composedEnhancer);
// let preloadedState;
// const persistedTodosString = localStorage.getItem('todos')

// if (persistedTodosString){
//   preloadedState = {
//     todos: JSON.parse(persistedTodosString)
//   }
// }

// const store = createStore(rootReducer, preloadedState);

export default store;
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";


import allClassReducer from "./Reducers/allclass";
import { registerReducer } from "./Reducers/regis";
//import createClassReducer from "./Reducers/createClass";
import deleteClassReducer from "./Reducers/deleteclass";


const reducers = combineReducers({
  allClassReducer,
  registerReducer,
  //createClassReducer,
  deleteClassReducer,
});
const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;

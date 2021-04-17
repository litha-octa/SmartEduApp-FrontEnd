import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import rpm from "redux-promise-middleware";


import allClasReducer from "./Reducers/allclass";

const logger = createLogger();
const enhancers = applyMiddleware(rpm, logger);
const reducers = combineReducers({
  mathReducer,
  allClasReducer,
});
const reduxStore = createStore(reducers, enhancers);

export default reduxStore;

import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import produceReducer from './produce.js'

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const rootReducer = combineReducers({
  produce: produceReducer
})

const configureStore = (preloadedState) => {
  console.log('CONFIGURE STORE')
  return createStore(rootReducer, preloadedState, enhancer)
};

export default configureStore

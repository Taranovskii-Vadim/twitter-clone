import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./saga";
import { tweetsReducer } from "./models/Tweets";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ tweets: tweetsReducer });

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

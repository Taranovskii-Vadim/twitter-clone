import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

import { tweetsReducer } from "./models/tweets";
import { tweetsSaga } from "./models/tweets/saga";

const rootReducer = combineReducers({ tweets: tweetsReducer });

function* rootSaga() {
  yield all([tweetsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Reducers
import { tweetsReducer } from "./models/tweets";
import { tagsReducer } from "./models/tags";

// Saga
import { tweetsSaga } from "./models/tweets/saga";
import { tagsSaga } from "./models/tags/saga";

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
});

function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

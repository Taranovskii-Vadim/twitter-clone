import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Reducers
import { tweetsReducer } from "./models/tweets";
import { tagsReducer } from "./models/tags";
import { tweetReducer } from "./models/tweet";
import { usersReducer } from "./models/users";
// Saga
import { tweetsSaga } from "./models/tweets/saga";
import { tagsSaga } from "./models/tags/saga";
import { tweetSaga } from "./models/tweet/saga";
import { usersSaga } from "./models/users/saga";

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
  users: usersReducer,
});

function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), tweetSaga(), usersSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

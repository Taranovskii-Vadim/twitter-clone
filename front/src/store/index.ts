import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";

// Reducers
import { tweetsReducer } from "./models/tweets";
import { tagsReducer } from "./models/tags";
import { tweetReducer } from "./models/tweet";
import { usersReducer } from "./models/users";
import { userReducer } from "./models/user";

// Saga
import { tweetsSaga } from "./models/tweets/saga";
import { tagsSaga } from "./models/tags/saga";
import { tweetSaga } from "./models/tweet/saga";
import { usersSaga } from "./models/users/saga";
import { userSaga } from "./models/user/saga";

const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tweet: tweetReducer,
  tags: tagsReducer,
  users: usersReducer,
  user: userReducer,
});

function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), tweetSaga(), usersSaga(), userSaga()]);
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

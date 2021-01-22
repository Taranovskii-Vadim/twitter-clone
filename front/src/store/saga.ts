import { all } from "redux-saga/effects";
import { tweetsSaga } from "./models/Tweets/saga";

export default function* rootSaga() {
  yield all([tweetsSaga()]);
}

import { put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../api/tweetsApi";
import { setTweets } from "./actions";
import { Types } from "./types";

function* getTweets() {
  const data = tweetsApi.fetchData();
  yield put(setTweets(data));
}

export default function* tweetsSaga() {
  yield takeEvery(Types.FETCH_TWEETS, getTweets);
}

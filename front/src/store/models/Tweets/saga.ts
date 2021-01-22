import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";
import { setTweets } from "./actions";
import { Tweet, Types } from "./types";

function* getTweets() {
  const data: Tweet[] = yield call(tweetsApi.fetchData);
  yield put(setTweets(data));
}

export function* tweetsSaga() {
  yield takeEvery(Types.FETCH_TWEETS, getTweets);
}

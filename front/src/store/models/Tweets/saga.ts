import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";

import { changeStatus, setTweets } from "./actions";
import { ETypes } from "./types";

function* getTweets() {
  yield put(changeStatus("loading"));
  const data = yield call(tweetsApi.fetchData);
  yield put(setTweets(data));
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
}

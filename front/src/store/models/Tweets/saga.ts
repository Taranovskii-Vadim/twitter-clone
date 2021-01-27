import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";

import { changeStatus, setTweets } from "./actions";
import { ETypes } from "./types";

function* getTweets() {
  try {
    yield put(changeStatus("loading"));
    const data = yield call(tweetsApi.fetchData);
    yield put(setTweets(data));
  } catch (e) {
    yield put(changeStatus("error"));
  }
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
}

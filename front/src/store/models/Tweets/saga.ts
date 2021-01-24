import { call, put, takeEvery } from "redux-saga/effects";

import { EStatus } from "../../types";
import { tweetsApi } from "../../api/tweetsApi";

import { changeStatus, setTweets } from "./actions";
import { ETypes } from "./types";

function* getTweets() {
  yield put(changeStatus(EStatus.loading));
  const data = yield call(tweetsApi.fetchData);
  yield put(setTweets(data));
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
}

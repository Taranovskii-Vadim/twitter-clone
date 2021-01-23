import { call, put, takeEvery } from "redux-saga/effects";

import { Status } from "../../types";

import { tweetsApi } from "../../api/tweetsApi";
import { setTweets, changeStatus } from "./actions";
import { Types } from "./types";

function* getTweets() {
  yield put(changeStatus(Status.loading));
  const data = yield call(tweetsApi.fetchData);
  yield put(setTweets(data));
}

export default function* tweetsSaga() {
  yield takeEvery(Types.FETCH_TWEETS, getTweets);
}

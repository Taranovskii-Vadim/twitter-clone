import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";
import { ITweet } from "../tweet/types";

import { changeStatus, setTweet, setTweets } from "./actions";
import { IState as ITweetsState, ETypes, IAddTweet } from "./types";

function* getTweets() {
  try {
    yield put(changeStatus("loading"));
    const data: ITweetsState["items"] = yield call(tweetsApi.fetchData);
    yield put(setTweets(data));
  } catch (e) {
    yield put(changeStatus("error"));
  }
}

function* addTweet({ payload }: IAddTweet) {
  try {
    const tweet: ITweet = yield call(tweetsApi.addTweet, payload);
    yield put(setTweet(tweet));
  } catch (e) {
    console.log(e);
  }
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
  yield takeEvery(ETypes.ADD_TWEET, addTweet);
}

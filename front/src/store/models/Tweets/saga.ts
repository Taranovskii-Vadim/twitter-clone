import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";
import { ITweet } from "../tweet/types";

import {
  changeFormStatus,
  changeStatus,
  filterTweets,
  setTweet,
  setTweets,
} from "./actions";
import {
  IState as ITweetsState,
  ETypes,
  IAddTweet,
  IDeleteTweet,
} from "./types";

function* getTweets() {
  try {
    yield put(changeStatus("loading"));
    const data: ITweetsState["items"] = yield call(tweetsApi.fetchData);
    yield put(setTweets(data));
  } catch (e) {
    yield put(
      changeStatus("error", { type: "error", text: e.response.data.message })
    );
  }
}

function* addTweet({ payload }: IAddTweet) {
  try {
    yield put(changeFormStatus("loading"));
    const tweet: ITweet = yield call(tweetsApi.addTweet, payload);
    yield put(setTweet(tweet));
  } catch (e) {
    yield put(
      changeFormStatus("error", {
        type: "error",
        text: "При добавлении твита произошла ошибка",
      })
    );
  }
}

function* deleteTweet({ payload }: IDeleteTweet) {
  try {
    const tweetId: string = yield call(tweetsApi.deleteTweet, payload);
    yield put(filterTweets(tweetId));
  } catch (e) {
    yield put(
      changeStatus("error", { type: "error", text: e.response.data.message })
    );
  }
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
  yield takeEvery(ETypes.ADD_TWEET, addTweet);
  yield takeEvery(ETypes.DELETE_TWEET, deleteTweet);
}

import { call, put, takeEvery } from "redux-saga/effects";

import { tweetsApi } from "../../api/tweetsApi";
import { ITweet } from "../tweet/types";

import { changeFormStatus, changeStatus, setTweet, setTweets } from "./actions";
import { IState as ITweetsState, ETypes, IAddTweet } from "./types";

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
        text: e.response.data.message,
      })
    );
  }
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
  yield takeEvery(ETypes.ADD_TWEET, addTweet);
}

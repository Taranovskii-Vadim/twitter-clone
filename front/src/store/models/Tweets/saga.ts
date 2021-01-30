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
    // TODO: Доработать
    const tweet = {
      id: "600aed5a12f05d452aef26546",
      text: payload,
      user: {
        name: "Vadim",
        nickname: "@ПiчэнькО",
        avatarUrl:
          "https://twizz.ru/wp-content/uploads/2020/10/1601624395_8c7dd922ad47494fc02c388e12c00eac.jpg",
      },
    };
    // const tweet: ITweet = yield call(tweetsApi.addTweet, payload);
    yield put(setTweet(tweet));
  } catch (e) {
    console.log(e);
  }
}

export function* tweetsSaga() {
  yield takeEvery(ETypes.FETCH_TWEETS, getTweets);
  yield takeEvery(ETypes.ADD_TWEET, addTweet);
}

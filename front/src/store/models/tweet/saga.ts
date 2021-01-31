import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../api/tweetsApi";
import { changeStatus, setTweet } from "./actions";
import { ETypes, IFetchTweet, IState } from "./types";

function* getTweet({ payload }: IFetchTweet) {
  try {
    yield put(changeStatus("loading"));
    const data: IState["tweet"] = yield call(tweetsApi.fetchTweet, payload);
    yield put(setTweet(data));
  } catch (e) {
    yield put(changeStatus("error", e.response.data));
  }
}

export function* tweetSaga() {
  yield takeEvery(ETypes.FETCH_TWEET, getTweet);
}

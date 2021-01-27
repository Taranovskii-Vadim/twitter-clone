import { call, put, takeEvery } from "redux-saga/effects";
import { tweetsApi } from "../../api/tweetsApi";
import { setTweet } from "./actions";
import { ETypes, IFetchTweet, IState } from "./types";

function* getTweet({ payload }: IFetchTweet) {
  try {
    const data: IState["tweet"] = yield call(tweetsApi.fetchTweet, payload);
    yield put(setTweet(data));
  } catch (e) {
    //   TODO: Сатвить статус в error
    console.log(e);
  }
}

export function* tweetSaga() {
  yield takeEvery(ETypes.FETCH_TWEET, getTweet);
}

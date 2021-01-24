import { call, put, takeEvery } from "redux-saga/effects";

import { tagsApi } from "../../api/tagsApi";

import { setTags } from "./actions";
import { ETypes } from "./types";

function* getTags() {
  const data = yield call(tagsApi.fetchData);
  yield put(setTags(data));
}

export function* tagsSaga() {
  yield takeEvery(ETypes.FETCH_TAGS, getTags);
}

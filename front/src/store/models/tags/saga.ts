import { call, put, takeEvery } from "redux-saga/effects";

import { tagsApi } from "../../api/tagsApi";

import { changeStatus, setTags } from "./actions";
import { ETypes } from "./types";

function* getTags() {
  try {
    const data = yield call(tagsApi.fetchData);
    yield put(setTags(data));
  } catch (e) {
    yield put(changeStatus("error", e.response.data));
  }
}

export function* tagsSaga() {
  yield takeEvery(ETypes.FETCH_TAGS, getTags);
}

import { call, put, takeEvery } from "redux-saga/effects";
import { usersApi } from "../../api/usersApi";
import { changeStatus, setUsers } from "./actions";
import { ETypes, IState } from "./types";

function* getUsers() {
  try {
    const data: IState["items"] = yield call(usersApi.fetchData);
    yield put(setUsers(data));
  } catch (e) {
    yield put(changeStatus("error", e.response.data));
  }
}

export function* usersSaga() {
  yield takeEvery(ETypes.FETCH_USERS, getUsers);
}

import { call, put, takeEvery } from "redux-saga/effects";
import { authApi } from "../../api/authApi";
import { setUser } from "./actions";
import { ETypes, ICreateUser, IFetchUser, IUser } from "./types";

function* fetchUser({ payload }: IFetchUser) {
  try {
    const data: IUser & { token?: string } = yield call(
      authApi.signIn,
      payload
    );
    window.localStorage.setItem("token", data.token!);
    delete data.token;
    yield put(setUser(data));
  } catch (e) {
    console.log(e);
  }
}

function* createUser({ payload }: ICreateUser) {
  try {
    const data: IUser = yield call(authApi.signUp, payload);
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

export function* userSaga() {
  yield takeEvery(ETypes.FETCH_USER, fetchUser);
  yield takeEvery(ETypes.CREATE_USER, createUser);
}

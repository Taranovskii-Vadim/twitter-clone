import { ETypes, IAuthData, IFetchUser, ISetUser, IUser } from "./types";

export const fetchUser = (payload: IAuthData): IFetchUser => ({
  type: ETypes.FETCH_USER,
  payload,
});

export const setUser = (payload: IUser): ISetUser => ({
  type: ETypes.SET_USER,
  payload,
});

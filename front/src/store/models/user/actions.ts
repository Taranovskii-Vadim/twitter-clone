import {
  ETypes,
  IAuthData,
  ICreateData,
  ICreateUser,
  IFetchUser,
  ISetUser,
  IUser,
} from "./types";

export const fetchUser = (payload: IAuthData): IFetchUser => ({
  type: ETypes.FETCH_USER,
  payload,
});

export const setUser = (payload: IUser): ISetUser => ({
  type: ETypes.SET_USER,
  payload,
});

export const createUser = (payload: ICreateData): ICreateUser => ({
  type: ETypes.CREATE_USER,
  payload,
});

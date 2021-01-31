import { Action } from "redux";
import { IUser, TStatus } from "../../types";

// data

export interface IState {
  items: IUser[];
  status: TStatus;
  message?: string;
}

// actions

export enum ETypes {
  FETCH_USERS = "/users/FETCH_USERS",
  SET_USERS = "/users/SET_USERS",
}

export interface IFetchUsers extends Action<ETypes.FETCH_USERS> {}

export interface ISetUsers extends Action<ETypes.SET_USERS> {
  payload: IState["items"];
}

export type TAction = ISetUsers;

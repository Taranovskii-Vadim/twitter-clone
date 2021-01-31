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
  CHANGE_STATUS = '"/users/SET_USERS',
}

export interface IFetchUsers extends Action<ETypes.FETCH_USERS> {}

export interface ISetUsers extends Action<ETypes.SET_USERS> {
  payload: IState["items"];
}

export interface IChangeStatus extends Action<ETypes.CHANGE_STATUS> {
  payload: {
    status: TStatus;
    message?: string;
  };
}

export type TAction = ISetUsers | IChangeStatus;

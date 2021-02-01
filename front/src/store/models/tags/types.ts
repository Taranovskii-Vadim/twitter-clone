import { Action } from "redux";

import { IMessage, TStatus } from "../../types";

// data
export interface ITag {
  readonly id: string;
  title: string;
  count: number;
}

export interface IState {
  items: ITag[];
  status: TStatus;
  message?: IMessage;
}

// actions

export enum ETypes {
  SET_TAGS = "/tags/SET_TAGS",
  FETCH_TAGS = "/tags/FETCH_TAGS",
  CHANGE_STATUS = "/tags/CHANGE_STATUS",
}

export interface ISetTags extends Action<ETypes.SET_TAGS> {
  payload: IState["items"];
}

export interface IFetchTags extends Action<ETypes.FETCH_TAGS> {}

export interface IChangeStatus extends Action<ETypes.CHANGE_STATUS> {
  payload: {
    status: TStatus;
    message?: IMessage;
  };
}

export type TAction = ISetTags | IChangeStatus;

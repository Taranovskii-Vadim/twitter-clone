import { Action } from "redux";

import { EStatus } from "../../types";

// data

interface IUser {
  name: string;
  nickname: string;
  avatarUrl: string;
}

export interface ITweet {
  readonly id: string;
  text: string;
  user: IUser;
}

export interface IState {
  items: ITweet[];
  status: EStatus;
}

// actions

export enum ETypes {
  SET_TWEETS = "/tweets/SET_TWEETS",
  FETCH_TWEETS = "/tweets/FETCH_TWEETS",
  CHANGE_STATUS = "/tweets/CHANGE_STATUS",
}

export interface ISetTweets extends Action<ETypes> {
  type: ETypes.SET_TWEETS;
  payload: IState["items"];
}

export interface IFetchTweets extends Action<ETypes> {
  type: ETypes.FETCH_TWEETS;
}

export interface IChangeStatus extends Action<ETypes> {
  type: ETypes.CHANGE_STATUS;
  payload: EStatus;
}

export type TAction = ISetTweets | IChangeStatus;

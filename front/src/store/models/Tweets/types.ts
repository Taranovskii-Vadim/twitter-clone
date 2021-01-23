import { Action } from "redux";
import { Status } from "../../types";

// Data

export interface User {
  name: string;
  nickname: string;
  avatarUrl: string;
}

export interface Tweet {
  id: string;
  text: string;
  user: User;
}

export interface State {
  items: Tweet[];
  status: Status;
}

//Actions

export enum Types {
  SET_TWEETS = "/tweets/SET_TWEETS",
  FETCH_TWEETS = "/tweets/FETCH_TWEETS",
  CHANGE_STATUS = "/tweets/CHANGE_STATUS",
}

export interface SetTweets extends Action<Types> {
  type: Types.SET_TWEETS;
  payload: State["items"];
}

export interface FetchTweets extends Action<Types> {
  type: Types.FETCH_TWEETS;
}
// TODO: изменение статуса можно сделать в виде хука
export interface ChangeStatus extends Action<Types> {
  type: Types.CHANGE_STATUS;
  payload: Status;
}

export type Actions = SetTweets | ChangeStatus;

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
}

export interface SetTweets extends Action<Types> {
  type: Types.SET_TWEETS;
  payload: State["items"];
}

export interface FetchTweets extends Action<Types> {
  type: Types.FETCH_TWEETS;
}

export type Actions = SetTweets;

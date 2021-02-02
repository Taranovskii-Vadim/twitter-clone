import { Action } from "redux";

import { IMessage, TStatus } from "../../types";

import { ITweet } from "../tweet/types";

// data

export interface IState {
  items: ITweet[];
  status: TStatus;
  message?: IMessage;
  formState: {
    formStatus: TStatus;
    formMessage?: IMessage;
  };
}

// actions

export enum ETypes {
  SET_TWEETS = "/tweets/SET_TWEETS",
  SET_TWEET = "/tweets/SET_TWEET",
  FETCH_TWEETS = "/tweets/FETCH_TWEETS",
  ADD_TWEET = "/tweets/ADD_TWEET",
  CHANGE_STATUS = "/tweets/CHANGE_STATUS",
  CHANGE_FORM_STATUS = "/tweets/CHANGE_FORM_STATUS",
}

export interface ISetTweets extends Action<ETypes.SET_TWEETS> {
  payload: IState["items"];
}

export interface ISetTweet extends Action<ETypes.SET_TWEET> {
  payload: ITweet;
}

export interface IFetchTweets extends Action<ETypes.FETCH_TWEETS> {}

export interface IAddTweet extends Action<ETypes.ADD_TWEET> {
  payload: string;
}

export interface IChangeStatus extends Action<ETypes.CHANGE_STATUS> {
  payload: {
    status: TStatus;
    message?: IMessage;
  };
}

export interface IChangeFormStatus extends Action<ETypes.CHANGE_FORM_STATUS> {
  payload: {
    formStatus: TStatus;
    formMessage?: IMessage;
  };
}

export type TAction =
  | ISetTweets
  | IChangeStatus
  | ISetTweet
  | IChangeFormStatus;

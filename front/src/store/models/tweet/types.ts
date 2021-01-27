import { Action } from "redux";
import { TStatus } from "../../types";

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
  tweet: ITweet | undefined;
  status: TStatus;
}

// actions

export enum ETypes {
  FETCH_TWEET = "/tweet/FETCH_TWEET",
  SET_TWEET = "/tweet/SET_TWEET",
  CHANGE_STATUS = "/tweet/CHANGE_STATUS",
}

export interface IFetchTweet extends Action<ETypes> {
  type: ETypes.FETCH_TWEET;
  payload: string;
}

export interface ISetTweet extends Action<ETypes> {
  type: ETypes.SET_TWEET;
  payload: IState["tweet"];
}

export interface IChangeStatus extends Action<ETypes> {
  type: ETypes.CHANGE_STATUS;
  payload: TStatus;
}

export type TAction = ISetTweet | IChangeStatus;

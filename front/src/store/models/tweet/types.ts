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
  tweet: ITweet | undefined;
  status: EStatus;
}

// actions

export enum ETypes {
  FETCH_TWEET = "/tweet/FETCH_TWEET",
  SET_TWEET = "/tweet/SET_TWEET",
}

export interface IFetchTweet extends Action<ETypes> {
  type: ETypes.FETCH_TWEET;
  payload: string;
}

export interface ISetTweet extends Action<ETypes> {
  type: ETypes.SET_TWEET;
  payload: IState["tweet"];
}

export type TAction = ISetTweet;

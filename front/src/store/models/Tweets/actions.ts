import { IMessage, TStatus } from "../../types";
import { ITweet } from "../tweet/types";

import {
  ETypes,
  IAddTweet,
  IChangeFormStatus,
  IChangeStatus,
  IFetchTweets,
  ISetTweet,
  ISetTweets,
  IState,
} from "./types";

export const setTweets = (payload: IState["items"]): ISetTweets => ({
  type: ETypes.SET_TWEETS,
  payload,
});

export const setTweet = (payload: ITweet): ISetTweet => ({
  type: ETypes.SET_TWEET,
  payload,
});

export const changeStatus = (
  status: TStatus,
  message?: IMessage
): IChangeStatus => ({
  type: ETypes.CHANGE_STATUS,
  payload: { status, message },
});

export const addTweet = (payload: string): IAddTweet => ({
  type: ETypes.ADD_TWEET,
  payload,
});

export const changeFormStatus = (
  formStatus: TStatus,
  formMessage?: IMessage
): IChangeFormStatus => ({
  type: ETypes.CHANGE_FORM_STATUS,
  payload: { formStatus, formMessage },
});

export const fetchTweets = (): IFetchTweets => ({ type: ETypes.FETCH_TWEETS });

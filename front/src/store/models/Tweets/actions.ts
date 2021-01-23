import { Status } from "../../types";
import { FetchTweets, SetTweets, State, Types, ChangeStatus } from "./types";

export const setTweets = (payload: State["items"]): SetTweets => ({
  type: Types.SET_TWEETS,
  payload,
});

export const changeStatus = (payload: Status): ChangeStatus => ({
  type: Types.CHANGE_STATUS,
  payload,
});

export const fetchTweets = (): FetchTweets => ({
  type: Types.FETCH_TWEETS,
});

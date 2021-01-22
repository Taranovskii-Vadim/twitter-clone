import { FetchTweets, SetTweets, State, Types } from "./types";

export const setTweets = (payload: State["items"]): SetTweets => ({
  type: Types.SET_TWEETS,
  payload,
});

export const fetchTweets = (): FetchTweets => ({ type: Types.FETCH_TWEETS });

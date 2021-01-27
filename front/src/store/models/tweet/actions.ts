import { ETypes, IFetchTweet, ISetTweet, IState } from "./types";

export const fetchTweet = (payload: string): IFetchTweet => ({
  type: ETypes.FETCH_TWEET,
  payload,
});

export const setTweet = (payload: IState["tweet"]): ISetTweet => ({
  type: ETypes.SET_TWEET,
  payload,
});

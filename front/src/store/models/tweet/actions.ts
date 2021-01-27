import { EStatus } from "../../types";
import { ETypes, IChangeStatus, IFetchTweet, ISetTweet, IState } from "./types";

export const fetchTweet = (payload: string): IFetchTweet => ({
  type: ETypes.FETCH_TWEET,
  payload,
});

export const setTweet = (payload: IState["tweet"]): ISetTweet => ({
  type: ETypes.SET_TWEET,
  payload,
});

export const changeStatus = (payload: EStatus): IChangeStatus => ({
  type: ETypes.CHANGE_STATUS,
  payload,
});

import { TStatus } from "../../types";

import {
  ETypes,
  IChangeStatus,
  IFetchTweets,
  ISetTweets,
  IState,
} from "./types";

export const setTweets = (payload: IState["items"]): ISetTweets => ({
  type: ETypes.SET_TWEETS,
  payload,
});

export const changeStatus = (payload: TStatus): IChangeStatus => ({
  type: ETypes.CHANGE_STATUS,
  payload,
});

export const fetchTweets = (): IFetchTweets => ({ type: ETypes.FETCH_TWEETS });

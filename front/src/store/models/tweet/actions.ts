import { IMessage, TStatus } from "../../types";
import { ETypes, IChangeStatus, IFetchTweet, ISetTweet, IState } from "./types";

export const fetchTweet = (payload: string): IFetchTweet => ({
  type: ETypes.FETCH_TWEET,
  payload,
});

export const setTweet = (payload: IState["tweet"]): ISetTweet => ({
  type: ETypes.SET_TWEET,
  payload,
});

export const changeStatus = (
  status: TStatus,
  message?: IMessage
): IChangeStatus => ({
  type: ETypes.CHANGE_STATUS,
  payload: {
    status,
    message,
  },
});

import { IMessage, TStatus } from "../../types";
import { ETypes, IChangeStatus, IFetchTags, ISetTags, IState } from "./types";

export const setTags = (payload: IState["items"]): ISetTags => ({
  type: ETypes.SET_TAGS,
  payload,
});

export const fetchTags = (): IFetchTags => ({ type: ETypes.FETCH_TAGS });

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

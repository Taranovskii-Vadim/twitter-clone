import { IMessage, TStatus } from "../../types";
import { ETypes, IChangeStatus, IFetchUsers, ISetUsers, IState } from "./types";

export const fetchUsers = (): IFetchUsers => ({ type: ETypes.FETCH_USERS });

export const setUsers = (payload: IState["items"]): ISetUsers => ({
  type: ETypes.SET_USERS,
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

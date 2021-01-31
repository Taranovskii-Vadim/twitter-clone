import { ETypes, IFetchUsers, ISetUsers, IState } from "./types";

export const fetchUsers = (): IFetchUsers => ({ type: ETypes.FETCH_USERS });

export const setUsers = (payload: IState["items"]): ISetUsers => ({
  type: ETypes.SET_USERS,
  payload,
});

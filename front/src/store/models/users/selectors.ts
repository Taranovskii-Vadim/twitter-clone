import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { IState } from "./types";

const getBase = (state: IRootState): IState => state.users;

export const selectUsers = createSelector(getBase, state => state.items);

export const selectUsersMessage = createSelector(
  getBase,
  state => state.message
);

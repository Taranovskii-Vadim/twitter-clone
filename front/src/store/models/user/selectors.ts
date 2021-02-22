import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { IState } from "./types";

const getBase = (state: IRootState): IState => state.user;

export const selectUser = createSelector(getBase, state => state.user);

export const selectUserAvatar = createSelector(
  selectUser,
  user => user?.avatarUrl
);

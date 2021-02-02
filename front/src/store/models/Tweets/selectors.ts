import { createSelector } from "reselect";

import { IRootState } from "../../types";

import { IState } from "./types";

const getBase = (state: IRootState): IState => state.tweets;

export const selectTweets = createSelector(getBase, state => state.items);

export const selectStatus = createSelector(getBase, state => state.status);

export const selectMessage = createSelector(getBase, state => state.message);

export const selectFormStatus = createSelector(
  getBase,
  state => state.formState.formStatus
);

export const selectFormMessage = createSelector(
  getBase,
  state => state.formState.formMessage
);

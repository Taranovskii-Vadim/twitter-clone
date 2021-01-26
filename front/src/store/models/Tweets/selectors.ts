import { createSelector } from "reselect";

import { IRootState } from "../../types";

import { IState } from "./types";

const getBase = (state: IRootState): IState => state.tweets;

export const selectTweets = createSelector(getBase, state => state.items);

export const selectStatus = createSelector(getBase, state => state.status);

export const selectTweet = createSelector(getBase, state => {
  // TODO: Если твита нет выдавать 404
  const tweet = state.items.find(
    item => item.id === "600aed5a16f05d452aef2590"
  );
  return tweet;
});

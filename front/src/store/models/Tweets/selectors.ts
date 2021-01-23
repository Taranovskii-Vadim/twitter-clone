import { createSelector } from "reselect";
import { rootState } from "../../types";
import { State } from "./types";

const getBase = (state: rootState): State => state.tweets;

export const selectTweets = createSelector(getBase, state => state.items);

export const selectStatus = createSelector(getBase, state => state.status);

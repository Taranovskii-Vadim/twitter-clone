import { createSelector } from "reselect";
import { IRootState } from "../../types";
import { IState } from "./types";

const getBase = (state: IRootState): IState => state.tweet;

export const selectTweet = createSelector(getBase, state => state.tweet);

import { createSelector } from "reselect";

import { IRootState } from "../../types";

import { IState } from "./types";

const getBase = (state: IRootState): IState => state.tags;

export const selectTags = createSelector(getBase, state => state.items);

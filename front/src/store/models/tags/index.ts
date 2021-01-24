import produce, { Draft } from "immer";

import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
};

export const tagsReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_TAGS) {
    draft.items = action.payload;
  }
}, initialState);

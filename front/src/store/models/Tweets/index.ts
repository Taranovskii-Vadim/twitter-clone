import produce, { Draft } from "immer";

import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
  status: "initial",
};

export const tweetsReducer = produce(
  (draft: Draft<IState>, action: TAction) => {
    if (action.type === ETypes.SET_TWEETS) {
      draft.items = action.payload;
      draft.status = "initial";
    } else if (action.type === ETypes.SET_TWEET) {
      draft.items.unshift(action.payload);
    } else if (action.type === ETypes.CHANGE_STATUS) {
      draft.status = action.payload;
    }
  },
  initialState
);

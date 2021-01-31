import produce, { Draft } from "immer";

import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  tweet: undefined,
  status: "initial",
};

export const tweetReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_TWEET) {
    draft.tweet = action.payload;
    draft.status = "initial";
  } else if (action.type === ETypes.CHANGE_STATUS) {
    if (action.payload.message) {
      draft.message = action.payload.message;
    }
    draft.status = action.payload.status;
  }
}, initialState);

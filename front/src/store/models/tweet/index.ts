import produce, { Draft } from "immer";

import { EStatus } from "../../types";
import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  tweet: undefined,
  status: EStatus.initial,
};

export const tweetReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_TWEET) {
    draft.tweet = action.payload;
  }
}, initialState);

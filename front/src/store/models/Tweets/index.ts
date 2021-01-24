import produce, { Draft } from "immer";

import { EStatus } from "../../types";

import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
  status: EStatus.initial,
};

export const tweetsReducer = produce(
  (draft: Draft<IState>, action: TAction) => {
    if (action.type === ETypes.SET_TWEETS) {
      draft.items = action.payload;
      draft.status = EStatus.done;
    } else if (action.type === ETypes.CHANGE_STATUS) {
      draft.status = action.payload;
    }
  },
  initialState
);

import produce, { Draft } from "immer";
import { Status } from "../../types";
import { State, Actions, Types } from "./types";

const initialState: State = {
  items: [],
  status: Status.initial,
};

export const tweetsReducer = produce((draft: Draft<State>, action: Actions) => {
  if (action.type === Types.SET_TWEETS) {
    draft.items = action.payload;
    draft.status = Status.done;
  } else if (action.type === Types.CHANGE_STATUS) {
    draft.status = action.payload;
  }
}, initialState);

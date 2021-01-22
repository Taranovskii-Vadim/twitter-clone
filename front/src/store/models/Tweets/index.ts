import produce, { Draft } from "immer";
import { Status } from "../../types";
import { State, Actions, Types } from "./types";

const initialState: State = {
  items: [],
  status: Status.initial,
};

export const tweetsReducer = produce((draft: Draft<State>, action: Actions) => {
  const { type, payload } = action;
  if (type === Types.SET_TWEETS) {
    draft.items = payload;
    draft.status = Status.done;
  }
}, initialState);

import produce, { Draft } from "immer";
import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
  status: "initial",
};

export const usersReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_USERS) {
    draft.items = action.payload;
  } else if (action.type === ETypes.CHANGE_STATUS) {
    if (action.payload.message) {
      draft.message = action.payload.message;
    }
    draft.status = action.payload.status;
  }
}, initialState);

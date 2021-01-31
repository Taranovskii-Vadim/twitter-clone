import produce, { Draft } from "immer";
import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
  status: "initial",
};

export const usersReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_USERS) {
    draft.items = action.payload;
  }
}, initialState);

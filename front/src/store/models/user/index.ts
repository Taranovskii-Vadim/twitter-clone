import produce, { Draft } from "immer";
import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  user: undefined,
  status: "initial",
};

export const userReducer = produce((draft: Draft<IState>, action: TAction) => {
  if (action.type === ETypes.SET_USER) {
    draft.user = action.payload;
  }
}, initialState);

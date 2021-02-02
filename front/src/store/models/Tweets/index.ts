import produce, { Draft } from "immer";

import { ETypes, IState, TAction } from "./types";

const initialState: IState = {
  items: [],
  status: "initial",
  formState: { formStatus: "initial" },
};

export const tweetsReducer = produce(
  (draft: Draft<IState>, action: TAction) => {
    if (action.type === ETypes.SET_TWEETS) {
      draft.items = action.payload;
      draft.status = "initial";
    } else if (action.type === ETypes.SET_TWEET) {
      draft.items.unshift(action.payload);
      draft.formState.formStatus = "initial";
    } else if (action.type === ETypes.CHANGE_STATUS) {
      if (action.payload.message) {
        draft.message = action.payload.message;
      }
      draft.status = action.payload.status;
    } else if (action.type === ETypes.CHANGE_FORM_STATUS) {
      console.log("errrr");
      if (action.payload.formMessage) {
        draft.formState.formMessage = action.payload.formMessage;
      }
      draft.formState.formStatus = action.payload.formStatus;
    }
  },
  initialState
);

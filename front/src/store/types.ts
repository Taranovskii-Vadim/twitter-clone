import { State as TweetsState } from "./models/Tweets/types";

export enum Status {
  loading = "loading",
  error = "error",
  initial = "initial",
  done = "done",
}

export interface rootState {
  tweets: TweetsState;
}

export type FixItLater = any;

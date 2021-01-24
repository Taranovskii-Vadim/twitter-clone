import { IState as ITweetsState } from "./models/tweets/types";

export enum EStatus {
  initial = "initial",
  loading = "loading",
  error = "error",
  done = "done",
}

export interface IRootState {
  tweets: ITweetsState;
}

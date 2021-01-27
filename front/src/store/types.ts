import { IState as ITweetsState } from "./models/tweets/types";
import { IState as ITagsState } from "./models/tags/types";
import { IState as ITweetState } from "./models/tweet/types";

export enum EStatus {
  initial = "initial",
  loading = "loading",
  error = "error",
  done = "done",
}

export interface IRootState {
  tweets: ITweetsState;
  tweet: ITweetState;
  tags: ITagsState;
}

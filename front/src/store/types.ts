import { IState as ITweetsState } from "./models/tweets/types";
import { IState as ITagsState } from "./models/tags/types";
import { IState as ITweetState } from "./models/tweet/types";
import { IState as IUsersState } from "./models/users/types";

export type TStatus = "initial" | "loading" | "error";

export interface IUser {
  readonly id: string;
  name: string;
  nickname: string;
  avatarUrl?: string;
}

export interface IRootState {
  tweets: ITweetsState;
  tweet: ITweetState;
  tags: ITagsState;
  users: IUsersState;
}

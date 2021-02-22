import { VariantType } from "notistack";
import { IState as ITweetsState } from "./models/tweets/types";
import { IState as ITagsState } from "./models/tags/types";
import { IState as ITweetState } from "./models/tweet/types";
import { IState as IUsersState } from "./models/users/types";
import { IState as IUserState } from "./models/user/types";

export type TStatus = "initial" | "loading" | "error";

export type TResponseStatus = "error" | "success";

export interface IResponse<T> {
  status: TResponseStatus;
  result: T;
}

export interface IMessage {
  type: VariantType;
  text: string;
}

export interface IRootState {
  tweets: ITweetsState;
  tweet: ITweetState;
  tags: ITagsState;
  users: IUsersState;
  user: IUserState;
}

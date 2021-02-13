import { Document } from "mongoose";
import { TUser } from "../UserModel/types";

export interface ITweet {
  readonly _id?: string;
  text: string;
  date?: Date;
  user: TUser;
}

export type TTweet = ITweet & Document;

import { Document } from "mongoose";
import { IReturnUser, TUser } from "../UserModel/types";

export interface IReturnTweet {
  readonly id: any;
  text: string;
  date: Date;
  user: IReturnUser;
}

export interface ITweet {
  readonly _id?: string;
  text: string;
  user: TUser;
  createdAt?: Date;
}

export type TTweet = ITweet & Document;

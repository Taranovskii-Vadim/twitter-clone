import { Document } from "mongoose";

export interface IReturnUser {
  name: string;
  nickname: string;
}

export interface IUser extends IReturnUser {
  readonly _id?: string;
  email: string;
  password: string;
  confirmedHash: string;
  confirmed?: boolean;
}

export type TUser = IUser & Document;

import { Document } from "mongoose";

export interface IReturnUser {
  readonly id: any;
  name: string;
  nickname: string;
  token?: string;
}

export interface IUser {
  readonly _id?: string;
  email: string;
  name: string;
  nickname: string;
  password: string;
  confirmedHash: string;
  confirmed?: boolean;
}

export type TUser = IUser & Document;

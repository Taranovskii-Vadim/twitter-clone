import { Document } from "mongoose";

export interface IUser extends Document {
  readonly _id: string;
  name: string;
  email: string;
  password: string;
  nickname: string;
}

import { Document, model, Schema } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  nickname: string;
  confirmed?: boolean;
  confirmed_hash: string;
}

type TUserSchema = IUser & Document;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmed_hash: {
    type: String,
    required: true,
  },
});

export const UserModel = model<TUserSchema>("User", UserSchema);

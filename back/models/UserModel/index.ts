import { model, Schema, Document } from "mongoose";
import { IUser } from "./types";

type TUser = IUser & Document;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
    default: false,
  },
  confirmedHash: {
    type: String,
    unique: true,
    required: true,
  },
});

export const userModel = model<TUser>("User", userSchema);

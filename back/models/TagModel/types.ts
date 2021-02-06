import { Document } from "mongoose";

export interface ITag extends Document {
  readonly _id: string;
  title: string;
  count: number;
}

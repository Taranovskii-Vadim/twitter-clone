import { Document } from "mongoose";

export interface IReturnTag {
  readonly id: string;
  title: string;
  count: number;
}

export interface ITag {
  readonly _id: string;
  title: string;
  count: number;
}

export type TTag = ITag & Document;

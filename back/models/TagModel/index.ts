import { model, Schema } from "mongoose";
import { ITag } from "./types";

const TagSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
});

export const TagModel = model<ITag>("TagModel", TagSchema);

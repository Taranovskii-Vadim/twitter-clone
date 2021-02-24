import { Schema, model } from "mongoose";
import { TTag } from "./types";

const TagModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false }
);

export const tagModel = model<TTag>("tag", TagModel);

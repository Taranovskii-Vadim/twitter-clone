import { model, Schema } from "mongoose";

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

export const TagModel = model("TagModel", TagSchema);

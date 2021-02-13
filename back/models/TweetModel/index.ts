import { model, Schema } from "mongoose";
import { TTweet } from "./types";

const tweetSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 280,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { versionKey: false }
);

export const tweetModel = model<TTweet>("Tweet", tweetSchema);

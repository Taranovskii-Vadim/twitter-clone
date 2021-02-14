import { model, Schema } from "mongoose";
import { TTweet } from "./types";

const tweetSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      maxlength: 280,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { versionKey: false, timestamps: true }
);

export const tweetModel = model<TTweet>("Tweet", tweetSchema);

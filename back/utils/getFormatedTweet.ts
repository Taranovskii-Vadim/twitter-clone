import { IReturnTweet, TTweet } from "../models/TweetModel/types";

export const getFormattedTweet = (tweet: TTweet): IReturnTweet => ({
  id: tweet._id,
  text: tweet.text,
  date: tweet.createdAt,
  user: {
    id: tweet.user._id,
    name: tweet.user.name,
    nickname: tweet.user.nickname,
  },
});

import React from "react";
import Typography from "@material-ui/core/Typography";

import { Tweet as TweetType } from "../../store/models/Tweets/types";

import UserAvatar from "../ui/UserAvatar";
import TweetTools from "./components/TweetTools";

import { useStyles } from "./styles";

interface IProps {
  tweet: TweetType;
}

const Tweet: React.FC<IProps> = ({ tweet }): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.avatarBlock}>
        <UserAvatar url={tweet.user.avatarUrl} size='small' />
      </div>
      <div style={{ width: "100%" }}>
        <Typography className={styles.userInfo}>
          {tweet.user.name} <small>{tweet.user.nickname} час назад</small>
        </Typography>
        <Typography className={styles.message}>{tweet.text}</Typography>
        <TweetTools />
      </div>
    </div>
  );
};

export default Tweet;

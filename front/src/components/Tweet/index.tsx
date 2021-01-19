import React from "react";
import Typography from "@material-ui/core/Typography";

import TweetTools from "./components/TweetTools";

import UserAvatar from "../ui/UserAvatar";

import { useStyles } from "./styles";

const Tweet = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.avatarBlock}>
        <UserAvatar size='small' />
      </div>
      <div>
        <Typography className={styles.userInfo}>
          vadim <small>@vadim час назад</small>
        </Typography>
        <Typography className={styles.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta
          doloremque magni quisquam id facilis.
        </Typography>
        <TweetTools />
      </div>
    </div>
  );
};

export default Tweet;

import React from "react";
import { Grid, Typography } from "@material-ui/core";

import TweetTools from "./components/TweetTools";

import UserAvatar from "../ui/UserAvatar";

import { useStyles } from "./styles";

const Tweet = () => {
  const styles = useStyles();
  return (
    <Grid container spacing={0} className={styles.root}>
      <Grid item xs={1} className={styles.avatarBlock}>
        <UserAvatar />
      </Grid>
      <Grid item xs={11}>
        <Typography className={styles.userInfo}>
          vadim <small>@vadim час назад</small>
        </Typography>
        <Typography className={styles.message}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime soluta
          doloremque magni quisquam id facilis.
        </Typography>
        <TweetTools />
      </Grid>
    </Grid>
  );
};

export default Tweet;

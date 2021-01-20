import React from "react";
import { Paper, Typography } from "@material-ui/core";

import Tweet from "../../../../components/Tweet";
import TweetForm from "../../../../components/TweetForm";
import SeparateLine from "../../../../components/ui/SeparateLine";

import { useStyles } from "./styles";

const MainContent = () => {
  const styles = useStyles();
  return (
    <Paper className={styles.wrapper}>
      <Typography variant='h6' className={styles.header}>
        Главная
      </Typography>
      <TweetForm />
      <SeparateLine />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Paper>
  );
};

export default MainContent;

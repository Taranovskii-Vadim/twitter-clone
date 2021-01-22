import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Tweet from "../../../../components/Tweet";
import TweetForm from "../../../../components/TweetForm";
import SeparateLine from "../../../../components/ui/SeparateLine";

import { useStyles } from "./styles";
// TODO: подправь типы!!!!
import { Tweet as TweetType } from "../../../../store/models/Tweets/types";

interface IProps {
  tweets: TweetType[];
}

const MainContent: React.FC<IProps> = ({ tweets }): JSX.Element => {
  const styles = useStyles();
  return (
    <Paper className={styles.wrapper}>
      <Typography variant='h6' className={styles.header}>
        Главная
      </Typography>
      <TweetForm />
      <SeparateLine />
      {tweets.map(item => (
        <Tweet key={item.id} tweet={item} />
      ))}
    </Paper>
  );
};

export default MainContent;

import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectTweet } from "../../store/models/tweets/selectors";
import UserAvatar from "../ui/UserAvatar";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const FullTweet: React.FC = (): JSX.Element => {
  const params = useParams();
  const styles = useStyles();
  const tweet = useSelector(selectTweet);

  if (!tweet) {
    return <div>404 error</div>;
  }

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
        {/* <TweetTools /> */}
      </div>
    </div>
  );
};

export default FullTweet;

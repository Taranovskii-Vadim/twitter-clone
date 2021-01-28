import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import UserAvatar from "../ui/UserAvatar";
import TweetTools from "./components/TweetTools";

import { ITweet } from "../../store/models/tweet/types";

import { useStyles } from "./styles";

interface IProps {
  tweet: ITweet;
}

const Tweet: React.FC<IProps> = ({ tweet }): JSX.Element => {
  const styles = useStyles();
  // ! по нажатии на кнопку происходит переход по ссылке
  return (
    <Link to={`/home/${tweet.id}`} className={styles.root}>
      <div className={styles.avatarBlock}>
        <UserAvatar url={tweet.user.avatarUrl} size='small' />
      </div>
      <div style={{ width: "100%" }}>
        <Typography className={styles.userInfo}>
          {tweet.user.name} <small>{tweet.user.nickname} час назад</small>
        </Typography>
        <Typography>{tweet.text}</Typography>
        <TweetTools />
      </div>
    </Link>
  );
};

export default Tweet;

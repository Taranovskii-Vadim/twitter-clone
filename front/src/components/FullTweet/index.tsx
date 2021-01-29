import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTweet, setTweet } from "../../store/models/tweet/actions";
import {
  selectIsLoading,
  selectTweet,
} from "../../store/models/tweet/selectors";

import { useStyles } from "./styles";
import UserAvatar from "../ui/UserAvatar";
import Typography from "@material-ui/core/Typography";
import TweetTools from "../TweetTools";

const FullTweet: React.FC = (): JSX.Element => {
  const styles = useStyles();
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweet);
  const isLoading = useSelector(selectIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweet(params.id));
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, params.id]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  if (tweet) {
    return (
      <div className={styles.root}>
        <div className={styles.rootHeader}>
          <div className={styles.rootAvatar}>
            <UserAvatar url={tweet.user.avatarUrl} size='small' />
          </div>
          <Typography className={styles.rootUser}>
            {tweet.user.name} <br />
            <small>{tweet.user.nickname} час назад</small>
          </Typography>
        </div>
        <Typography className={styles.rootText}>{tweet.text}</Typography>
        <img
          className={styles.rootPicture}
          src='https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg'
          alt='test'
        />
        <Typography className={styles.rootTime}>
          6:31 PM 12 сент. 2015 г.
        </Typography>
        <div className={styles.rootTweetInfo}>
          <Typography>
            <b>1</b> ретвит
          </Typography>
          <Typography>
            <b>43</b> отметки "Нравится"
          </Typography>
        </div>
        <div className={styles.rootFooter}>
          <TweetTools />
        </div>
      </div>
    );
  }
  // ! Если твита нет будет пустая страница(защита роутов редирект на 404)
  // ! Временно отображаем loader
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  );
};

export default FullTweet;

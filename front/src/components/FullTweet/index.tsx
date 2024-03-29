import React from "react";
import moment from "moment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useParams } from "react-router-dom";

import UserAvatar from "../ui/UserAvatar";
import TweetTools from "../TweetTools";

import { fetchTweet, setTweet } from "../../store/models/tweet/actions";
import {
  selectStatus,
  selectTweet,
  selectMessage,
} from "../../store/models/tweet/selectors";

import { useStyles } from "./styles";
import { getSnackBarConfig } from "../../helpers";

const FullTweet: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const { enqueueSnackbar } = useSnackbar();

  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweet);
  const status = useSelector(selectStatus);
  const message = useSelector(selectMessage);

  const isLoading = status === "loading";

  React.useEffect(() => {
    dispatch(fetchTweet(params.id));
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, params.id]);

  React.useEffect(() => {
    if (message) {
      enqueueSnackbar(message.text, getSnackBarConfig(message.type));
    }
  }, [message]);

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
            <small>{tweet.user.nickname}</small>
          </Typography>
        </div>
        <Typography className={styles.rootText}>{tweet.text}</Typography>
        {tweet.imageUrl ? (
          <img
            className={styles.rootPicture}
            src='https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg'
            alt='test'
          />
        ) : null}
        <Typography className={styles.rootTime}>
          {moment(tweet.date).format("h:mm A Do MMMM YYYY")}
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
          <TweetTools color='inherit' />
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

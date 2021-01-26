import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import TweetForm from "../../../../components/TweetForm";
import SeparateLine from "../../../../components/ui/SeparateLine";
import BackButton from "../../../../components/ui/BackButton";
import Tweet from "../../../../components/Tweet";
import FullTweet from "../../../../components/FullTweet";

import { EStatus as TweetsStatus } from "../../../../store/types";
import { fetchTweets } from "../../../../store/models/tweets/actions";
import {
  selectStatus,
  selectTweets,
} from "../../../../store/models/tweets/selectors";

import { useStyles } from "./styles";

const MainContent: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const tweets = useSelector(selectTweets);
  const status = useSelector(selectStatus);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <Paper className={styles.wrapper}>
      <Route path='/home/:id'>
        <div className={styles.headerBtn}>
          <BackButton />
          <Typography variant='h6' className={styles.title}>
            Твитнуть
          </Typography>
        </div>
        <FullTweet />
      </Route>
      <Route path={["/home", "/search"]} exact>
        <div className={styles.header}>
          <Typography variant='h6' className={styles.title}>
            Главная
          </Typography>
        </div>
        <TweetForm />
        <SeparateLine />
      </Route>
      <Switch>
        <Route exact path='/home'>
          {status === TweetsStatus.loading ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            tweets.map(item => <Tweet key={item.id} tweet={item} />)
          )}
        </Route>
        <Route path='/search' render={() => <p>Search</p>} />
      </Switch>
    </Paper>
  );
};

export default MainContent;

import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";

import Tweet from "../../../../components/Tweet";
import ContentTitle from "./components/ContentTitle";

import { getSnackBarConfig } from "../../../../helpers";

import {
  deleteTweet,
  fetchTweets,
} from "../../../../store/models/tweets/actions";
import {
  selectStatus,
  selectTweets,
  selectMessage,
} from "../../../../store/models/tweets/selectors";

import { useStyles } from "./styles";

const MainContent: React.FC = (): JSX.Element => {
  const { enqueueSnackbar } = useSnackbar();
  const styles = useStyles();

  const dispatch = useDispatch();

  const tweets = useSelector(selectTweets);
  const status = useSelector(selectStatus);
  const message = useSelector(selectMessage);

  const isLoading = status === "loading";

  React.useEffect(() => {
    if (message) {
      enqueueSnackbar(message.text, getSnackBarConfig(message.type));
    }
  }, [message]);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <Paper className={styles.wrapper}>
      <ContentTitle />
      <Switch>
        <Route exact path='/home'>
          {isLoading ? (
            <div style={{ textAlign: "center" }}>
              <CircularProgress />
            </div>
          ) : (
            tweets.map(item => (
              <Tweet
                onDelete={id => dispatch(deleteTweet(id))}
                key={item.id}
                tweet={item}
              />
            ))
          )}
        </Route>
        <Route path='/search' render={() => <p>Search</p>} />
      </Switch>
    </Paper>
  );
};

export default MainContent;

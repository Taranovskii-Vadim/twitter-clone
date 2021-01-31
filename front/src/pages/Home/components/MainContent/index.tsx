import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

import Tweet from "../../../../components/Tweet";
import ContentTitle from "./components/ContentTitle";
import EmptyData from "../../../../components/EmptyData";

import { fetchTweets } from "../../../../store/models/tweets/actions";
import {
  selectMessage,
  selectStatus,
  selectTweets,
} from "../../../../store/models/tweets/selectors";

import { useStyles } from "./styles";

const MainContent: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();

  const tweets = useSelector(selectTweets);
  const status = useSelector(selectStatus);
  const message = useSelector(selectMessage);

  const isLoading = status === "loading";
  const isError = status === "error";

  const [isMessage, setIsMessage] = React.useState(false);

  React.useEffect(() => {
    if (isError) {
      setIsMessage(true);
    }
  }, [status]);

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
          ) : tweets.length ? (
            tweets.map(item => <Tweet key={item.id} tweet={item} />)
          ) : (
            <EmptyData
              message={message ? message : "Добавьте свой первый твит!!!"}
            />
          )}
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            autoHideDuration={3000}
            open={isMessage}
            onClose={() => setIsMessage(false)}
          >
            <Alert severity='error'>{message}</Alert>
          </Snackbar>
        </Route>
        <Route path='/search' render={() => <p>Search</p>} />
      </Switch>
    </Paper>
  );
};

export default MainContent;

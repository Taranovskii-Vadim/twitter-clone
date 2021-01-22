import React from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import { fetchTweets } from "../../store/models/Tweets/actions";
import { selectTweets } from "../../store/models/Tweets/selectors";

import { useStyles } from "./styles";

const Home: React.FC = (): JSX.Element => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweets);

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, []);

  return (
    <Container className={styles.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <Navbar />
        </Grid>
        <Grid item sm={8} md={6}>
          <Switch>
            <Route
              path='/home'
              render={() => <MainContent tweets={tweets} />}
            />
            <Route path='/search' render={() => <p>Search</p>} />
          </Switch>
        </Grid>
        <Grid item sm={3} md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

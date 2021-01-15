import React from "react";
import { Grid, Container, Button } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import { useStyles } from "./styles";

const Home = (): JSX.Element => {
  const styles = useStyles();
  return (
    <Container className={styles.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Navbar />
          <Button variant='contained' color='primary' fullWidth>
            Твитнуть
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Switch>
            <Route path='/home' component={MainContent} />
            <Route path='/search' render={() => <p>Search</p>} />
          </Switch>
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

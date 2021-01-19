import React from "react";
import { Grid, Container } from "@material-ui/core";

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
        <Grid item sm={1} md={3}>
          <Navbar />
        </Grid>
        <Grid item sm={8} md={6}>
          <Switch>
            <Route path='/home' component={MainContent} />
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

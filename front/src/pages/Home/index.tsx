import React from "react";
import { Grid, Container } from "@material-ui/core";

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
        </Grid>
        <Grid item xs={6}>
          <MainContent />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

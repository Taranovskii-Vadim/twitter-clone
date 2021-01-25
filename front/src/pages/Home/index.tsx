import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import { useStyles } from "./styles";

const Home: React.FC = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Container className={styles.wrapper} maxWidth='lg'>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <Navbar />
        </Grid>
        <Grid item sm={8} md={6}>
          <MainContent />
        </Grid>
        <Grid item sm={3} md={3}>
          <Sidebar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

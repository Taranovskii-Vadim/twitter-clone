import React from "react";
import { Grid, Container, IconButton, TextField } from "@material-ui/core";
import Navbar from "./components/Navbar";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

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
          xs
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth placeholder='Поиск' />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

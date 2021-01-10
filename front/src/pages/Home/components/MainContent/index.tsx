import React from "react";
import { Paper } from "@material-ui/core";

import { useStyles } from "./styles";

const MainContent = () => {
  const styles = useStyles();
  return <Paper className={styles.wrapper}>Главная часть</Paper>;
};

export default MainContent;

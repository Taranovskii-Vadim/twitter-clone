import React from "react";

import LatestNews from "./components/LatestNews";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <LatestNews />
      <Suggestions />
    </div>
  );
};

export default Sidebar;

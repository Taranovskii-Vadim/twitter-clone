import React from "react";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
    </div>
  );
};

export default Sidebar;

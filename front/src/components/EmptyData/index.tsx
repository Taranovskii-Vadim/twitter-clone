import React from "react";
import SentimentVeryDissatisfiedIcon from "@material-ui/icons/SentimentVeryDissatisfied";

import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

interface IProps {
  message: string;
}

const EmptyData: React.FC<IProps> = ({ message }): JSX.Element => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <SentimentVeryDissatisfiedIcon
        className={styles.rootIcon}
        color='primary'
      />
      <Typography className={styles.rootText} variant='h6'>
        {message}
      </Typography>
    </div>
  );
};

export default EmptyData;

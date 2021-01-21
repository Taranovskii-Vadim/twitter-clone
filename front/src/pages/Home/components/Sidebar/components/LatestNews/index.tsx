import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles";

const LatestNews: React.FC = (): JSX.Element => {
  const styles = useStyles();
  return (
    <List disablePadding className={styles.root}>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootTitle}>Актуальные темы</Typography>
      </ListItem>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootItemTitle}>
          Санкт-Петербург
        </Typography>
        <small className={styles.rootItemTweets}>
          Твитов: <span>3000</span>
        </small>
      </ListItem>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootItemTitle}>#Коронавирус</Typography>
        <small className={styles.rootItemTweets}>
          Твитов: <span>3000</span>
        </small>
      </ListItem>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootItemTitle}>Беларусь</Typography>
        <small className={styles.rootItemTweets}>
          Твитов: <span>3000</span>
        </small>
      </ListItem>
    </List>
  );
};

export default LatestNews;

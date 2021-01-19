import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

import UserAvatar from "../../../../../../components/ui/UserAvatar";

import { useStyles } from "./styles";

const Suggestions: React.FC = (): JSX.Element => {
  const styles = useStyles();
  return (
    <List disablePadding className={styles.root}>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootTitle}>Кого читать</Typography>
      </ListItem>
      <ListItem className={styles.rootItem}>
        <UserAvatar />
        <div style={{ marginLeft: 10 }}>
          <Typography className={styles.rootItemTitle}>
            Dock of Shame
          </Typography>
          <small className={styles.rootItemUserNick}>@dockOfShame</small>
        </div>
        <IconButton color='primary' className={styles.rootAddBtn}>
          <PersonAddOutlinedIcon />
        </IconButton>
      </ListItem>
    </List>
  );
};

export default Suggestions;

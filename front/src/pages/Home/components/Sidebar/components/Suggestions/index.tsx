import React from "react";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

import { IState as IUsersState } from "../../../../../../store/models/users/types";

import UserAvatar from "../../../../../../components/ui/UserAvatar";

import { useStyles } from "./styles";

interface IProps {
  users: IUsersState["items"];
}

const Suggestions: React.FC<IProps> = ({ users }): JSX.Element => {
  const styles = useStyles();
  return (
    <List disablePadding className={styles.root}>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootTitle}>Кого читать</Typography>
      </ListItem>
      {users.map(item => (
        <ListItem key={item.id} className={styles.rootItem}>
          <UserAvatar url={item.avatarUrl} />
          <div style={{ marginLeft: 10 }}>
            <Typography className={styles.rootItemTitle}>
              {item.name}
            </Typography>
            <small className={styles.rootItemUserNick}>{item.nickname}</small>
          </div>
          <IconButton color='primary' className={styles.rootAddBtn}>
            <PersonAddOutlinedIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

export default Suggestions;

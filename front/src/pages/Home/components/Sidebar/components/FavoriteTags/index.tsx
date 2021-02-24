import React from "react";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import { IState as ITagsState } from "../../../../../../store/models/tags/types";

import { useStyles } from "./styles";

interface IProps {
  tags: ITagsState["items"];
}

const FavoriteTags: React.FC<IProps> = ({ tags }): JSX.Element | null => {
  const styles = useStyles();
  if (!tags.length) {
    return null;
  }
  return (
    <List disablePadding className={styles.root}>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootTitle}>Актуальные темы</Typography>
      </ListItem>
      {tags.map(item => (
        <NavLink
          className={styles.rootLink}
          key={item.id}
          to={`/search?q=${item.title}`}
        >
          <ListItem className={styles.rootItem}>
            <Typography className={styles.rootItemTitle}>
              {item.title}
            </Typography>
            <small className={styles.rootItemTweets}>
              Твитов: <span>{item.count}</span>
            </small>
          </ListItem>
        </NavLink>
      ))}
    </List>
  );
};

export default FavoriteTags;

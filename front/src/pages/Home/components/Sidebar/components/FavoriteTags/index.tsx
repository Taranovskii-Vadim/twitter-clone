import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

import { IState as ITagsState } from "../../../../../../store/models/tags/types";

import { useStyles } from "./styles";

interface IProps {
  tags: ITagsState["items"];
}

const FavoriteTags: React.FC<IProps> = ({ tags }): JSX.Element => {
  const styles = useStyles();
  return (
    <List disablePadding className={styles.root}>
      <ListItem className={styles.rootItem}>
        <Typography className={styles.rootTitle}>Актуальные темы</Typography>
      </ListItem>
      {tags.map(item => (
        <ListItem key={item.id} className={styles.rootItem}>
          <Typography className={styles.rootItemTitle}>{item.title}</Typography>
          <small className={styles.rootItemTweets}>
            Твитов: <span>{item.count}</span>
          </small>
        </ListItem>
      ))}
    </List>
  );
};

export default FavoriteTags;

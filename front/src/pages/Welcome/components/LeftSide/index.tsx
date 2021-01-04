import React from "react";
import { Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TwitterIcon from "@material-ui/icons/Twitter";

import { useStyles } from "./styles";

const LeftSide = (): JSX.Element => {
  const styles = useStyles();
  return (
    <section className={styles.leftSide}>
      <TwitterIcon color='primary' className={styles.leftSideTwitIcon} />
      <ul className={styles.infoList}>
        <li>
          <Typography variant='h6'>
            <SearchIcon className={styles.leftSideIcon} />
            Читайте о том, что вам интересно.
          </Typography>
        </li>
        <li>
          <Typography variant='h6'>
            <PeopleOutlineIcon className={styles.leftSideIcon} />
            Узнайте, о чем говорят в мире.
          </Typography>
        </li>
        <li>
          <Typography variant='h6'>
            <ChatBubbleOutlineIcon className={styles.leftSideIcon} />
            Присоединяйтесь к общению.
          </Typography>
        </li>
      </ul>
    </section>
  );
};

export default LeftSide;

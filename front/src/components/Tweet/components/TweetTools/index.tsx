import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ReplyIcon from "@material-ui/icons/Reply";

import { useStyles } from "./styles";

const TweetTools = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <IconButton>
        <ChatBubbleOutlineOutlinedIcon
          color='primary'
          className={styles.footerIcon}
        />
      </IconButton>
      <IconButton>
        <RepeatOutlinedIcon color='primary' className={styles.footerIcon} />
      </IconButton>
      <IconButton>
        <FavoriteBorderOutlinedIcon
          color='primary'
          className={styles.footerIcon}
        />
      </IconButton>
      <IconButton>
        <ReplyIcon color='primary' className={styles.footerIcon} />
      </IconButton>
    </div>
  );
};

export default TweetTools;

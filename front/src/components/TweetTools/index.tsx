import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ReplyIcon from "@material-ui/icons/Reply";

const TweetTools: React.FC = (): JSX.Element => (
  <>
    <IconButton>
      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 20 }} color='primary' />
    </IconButton>
    <IconButton>
      <RepeatOutlinedIcon style={{ fontSize: 20 }} color='primary' />
    </IconButton>
    <IconButton>
      <FavoriteBorderOutlinedIcon style={{ fontSize: 20 }} color='primary' />
    </IconButton>
    <IconButton>
      <ReplyIcon style={{ fontSize: 20 }} color='primary' />
    </IconButton>
  </>
);

export default TweetTools;

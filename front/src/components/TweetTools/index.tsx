import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ReplyIcon from "@material-ui/icons/Reply";

interface IProps {
  color: "primary" | "inherit";
}

const TweetTools: React.FC<IProps> = ({ color }): JSX.Element => (
  <>
    <IconButton>
      <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 20 }} color={color} />
    </IconButton>
    <IconButton>
      <RepeatOutlinedIcon style={{ fontSize: 20 }} color={color} />
    </IconButton>
    <IconButton>
      <FavoriteBorderOutlinedIcon style={{ fontSize: 20 }} color={color} />
    </IconButton>
    <IconButton>
      <ReplyIcon style={{ fontSize: 20 }} color={color} />
    </IconButton>
  </>
);

export default TweetTools;

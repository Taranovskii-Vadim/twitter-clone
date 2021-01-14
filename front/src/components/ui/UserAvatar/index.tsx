import React from "react";
import { Avatar } from "@material-ui/core";

interface AvatarProps {
  size?: "medium" | "large";
}

const UserAvatar: React.FC<AvatarProps> = ({ size }): JSX.Element => {
  return (
    <Avatar
      alt='user'
      src='https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg'
    />
  );
};

export default UserAvatar;

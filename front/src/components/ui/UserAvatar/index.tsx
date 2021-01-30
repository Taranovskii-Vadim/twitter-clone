import React from "react";
import Avatar from "@material-ui/core/Avatar";

interface AvatarProps {
  size?: "small" | "medium" | "large";
  url?: string;
}

const UserAvatar: React.FC<AvatarProps> = ({ size, url }): JSX.Element => {
  const styles = {
    width: size === "small" ? 45 : 40,
    height: size === "small" ? 45 : 40,
  };
  return (
    <Avatar
      alt='user'
      style={styles}
      src={
        url
          ? url
          : "https://yt3.ggpht.com/a/AATXAJxfhf3kbn0w0USsJ25Srf3KLKEXpHNX0zO4Wg=s900-c-k-c0xffffffff-no-rj-mo"
      }
    />
  );
};

export default UserAvatar;

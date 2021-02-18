import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import UserAvatar from "../ui/UserAvatar";
import TweetTools from "../TweetTools";

import { ITweet } from "../../store/models/tweet/types";

import { useStyles } from "./styles";

interface IProps {
  tweet: ITweet;
  onDelete: (id: string) => void;
}

const Tweet: React.FC<IProps> = ({ tweet, onDelete }): JSX.Element => {
  const styles = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.root}>
      <div className={styles.rootLinkWrapper}>
        <Link to={`/home/${tweet.id}`}>
          <div className={styles.rootHeader}>
            <div className={styles.rootAvatar}>
              <UserAvatar url={tweet.user.avatarUrl} size='small' />
            </div>
            <Typography className={styles.rootUser}>
              {tweet.user.name} <br />
              <small style={{ marginRight: 5 }}>{tweet.user.nickname}</small>
              <small>{moment(tweet.date).fromNow()}</small>
            </Typography>
          </div>
          <Typography className={styles.rootText}>{tweet.text}</Typography>
          {tweet.imageUrl ? (
            <img
              className={styles.rootPicture}
              src='https://img1.goodfon.ru/original/3830x2550/d/48/nastroeniya-devushka-ulybka-3172.jpg'
            />
          ) : null}
        </Link>
        <IconButton className={styles.rootMoreBtn} onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id='fade-menu'
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem>
            <EditOutlinedIcon style={{ marginRight: 10 }} color='primary' />
            <Typography>Редактировать</Typography>
          </MenuItem>
          <MenuItem onClick={() => onDelete(tweet.id)}>
            <DeleteOutlineOutlinedIcon
              style={{ marginRight: 10 }}
              color='error'
            />
            <Typography>Удалить</Typography>
          </MenuItem>
        </Menu>
      </div>
      <div className={styles.rootFooter}>
        <TweetTools color='primary' />
      </div>
    </div>
  );
};

export default Tweet;

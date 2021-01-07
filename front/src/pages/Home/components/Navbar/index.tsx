import React from "react";
import { IconButton, Typography } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";

import { useStyles } from "./styles";

const Navbar = () => {
  const styles = useStyles();
  return (
    <ul className={styles.navBarList}>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <TwitterIcon color='primary' className={styles.navBarLogo} />
        </IconButton>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <SearchOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Поиск
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <NotificationsNoneOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Уведомления
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <EmailOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Сообщения
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <BookmarkBorderOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Закладки
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <ListAltOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Списки
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <PersonOutlineOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Профиль
        </Typography>
      </li>
      <li className={styles.navBarListItem}>
        <IconButton className={styles.navBarIconButton}>
          <MoreHorizOutlinedIcon className={styles.navBarIcon} />
        </IconButton>
        <Typography className={styles.navBarLable} variant='h6'>
          Еще
        </Typography>
      </li>
    </ul>
  );
};

export default Navbar;

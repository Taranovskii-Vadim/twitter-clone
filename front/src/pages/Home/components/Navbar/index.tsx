import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-ui/core";
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
    <ul className={styles.root}>
      <li className={styles.rootItem}>
        <TwitterIcon color='primary' className={styles.rootLogo} />
      </li>
      <NavLink
        to='/home'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <HomeOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Главная
        </Typography>
      </NavLink>
      <NavLink
        to='/search'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <SearchOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Поиск
        </Typography>
      </NavLink>
      <NavLink
        to='/notifications'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <NotificationsNoneOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Уведомления
        </Typography>
      </NavLink>
      <NavLink
        to='/messages'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <EmailOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Сообщения
        </Typography>
      </NavLink>
      <NavLink
        to='/bookmarks'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <BookmarkBorderOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Закладки
        </Typography>
      </NavLink>
      <NavLink
        to='/lists'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <ListAltOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Списки
        </Typography>
      </NavLink>
      <NavLink
        to='/profile'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <PersonOutlineOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Профиль
        </Typography>
      </NavLink>
      <NavLink
        to='/more'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <MoreHorizOutlinedIcon className={styles.navBarIcon} />
        <Typography className={styles.navBarLable} variant='h6'>
          Еще
        </Typography>
      </NavLink>
    </ul>
  );
};

export default Navbar;

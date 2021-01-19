import React from "react";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import Button from "@material-ui/core/Button";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@material-ui/icons/ListAltOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";

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
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Главная
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/search'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <SearchOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Поиск
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/notifications'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <NotificationsNoneOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Уведомления
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/messages'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <EmailOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Сообщения
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/bookmarks'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <BookmarkBorderOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Закладки
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/lists'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <ListAltOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Списки
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/profile'
        className={styles.rootItem}
        activeClassName={styles.activeItem}
      >
        <PersonOutlineOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Профиль
          </Typography>
        </Hidden>
      </NavLink>
      <NavLink
        to='/more'
        className={styles.rootItem}
        style={{ marginBottom: 30 }}
        activeClassName={styles.activeItem}
      >
        <MoreHorizOutlinedIcon className={styles.navBarIcon} />
        <Hidden smDown>
          <Typography className={styles.navBarLable} variant='h6'>
            Еще
          </Typography>
        </Hidden>
      </NavLink>
      <Button variant='contained' color='primary' fullWidth>
        <Hidden smDown>Твитнуть</Hidden>
        <Hidden mdUp>
          <CreateOutlinedIcon />
        </Hidden>
      </Button>
    </ul>
  );
};

export default Navbar;

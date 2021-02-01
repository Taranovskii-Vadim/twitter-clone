import React from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";

import { getSnackBarConfig } from "../../../../helpers";

import { fetchTags } from "../../../../store/models/tags/actions";
import { fetchUsers } from "../../../../store/models/users/actions";
import {
  selectTags,
  selectTagsMessage,
} from "../../../../store/models/tags/selectors";
import {
  selectUsers,
  selectUsersMessage,
} from "../../../../store/models/users/selectors";

import FavoriteTags from "./components/FavoriteTags";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  // tags
  const tags = useSelector(selectTags);
  const tagsMsg = useSelector(selectTagsMessage);

  // users
  const users = useSelector(selectUsers);
  const usersMsg = useSelector(selectUsersMessage);

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchUsers());
  }, []);

  React.useEffect(() => {
    if (tagsMsg) {
      enqueueSnackbar(tagsMsg.text, getSnackBarConfig(tagsMsg.type));
    }
  }, [tagsMsg]);

  React.useEffect(() => {
    if (usersMsg) {
      enqueueSnackbar(usersMsg.text, getSnackBarConfig(usersMsg.type));
    }
  }, [usersMsg]);

  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <FavoriteTags tags={tags} />
      <Suggestions users={users} />
    </div>
  );
};

export default Sidebar;

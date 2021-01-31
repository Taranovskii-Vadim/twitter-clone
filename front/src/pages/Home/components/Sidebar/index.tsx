import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../../../store/models/tags/actions";
import { fetchUsers } from "../../../../store/models/users/actions";
import {
  selectMessage,
  selectTags,
} from "../../../../store/models/tags/selectors";
import { selectUsers } from "../../../../store/models/users/selectors";

import Message from "../../../../components/Message";
import FavoriteTags from "./components/FavoriteTags";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();
  // tags
  const tags = useSelector(selectTags);
  const message = useSelector(selectMessage);

  // users
  const users = useSelector(selectUsers);

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchUsers());
  }, []);

  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <FavoriteTags tags={tags} />
      <Suggestions users={users} />
      <Message message={message} />
    </div>
  );
};

export default Sidebar;

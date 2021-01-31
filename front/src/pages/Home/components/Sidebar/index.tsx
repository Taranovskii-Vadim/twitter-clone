import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../../../store/models/tags/actions";
import { fetchUsers } from "../../../../store/models/users/actions";
import {
  selectMessage as selectTagsMsg,
  selectTags,
} from "../../../../store/models/tags/selectors";
import {
  selectMessage as selectUsersMsg,
  selectUsers,
} from "../../../../store/models/users/selectors";

import Message from "../../../../components/Message";
import FavoriteTags from "./components/FavoriteTags";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();
  // tags
  const tags = useSelector(selectTags);
  const tagsMsg = useSelector(selectTagsMsg);

  // users
  const users = useSelector(selectUsers);
  const usersMsg = useSelector(selectUsersMsg);

  React.useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchUsers());
  }, []);
  // ! Тут есть костыль, к черту Mui, Antd топ
  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <FavoriteTags tags={tags} />
      <Suggestions users={users} />
      {tagsMsg && usersMsg ? (
        <Message message='Упс, что-то пошло не так' />
      ) : (
        <>
          <Message message={tagsMsg} />
          <Message message={usersMsg} />
        </>
      )}
    </div>
  );
};

export default Sidebar;

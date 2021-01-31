import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../../../store/models/tags/actions";
import {
  selectMessage,
  selectTags,
} from "../../../../store/models/tags/selectors";

import Message from "../../../../components/Message";
import FavoriteTags from "./components/FavoriteTags";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();
  const tags = useSelector(selectTags);
  const message = useSelector(selectMessage);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <FavoriteTags tags={tags} />
      <Suggestions />
      <Message message={message} />
    </div>
  );
};

export default Sidebar;

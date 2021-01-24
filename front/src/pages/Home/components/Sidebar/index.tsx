import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../../../store/models/tags/actions";
import { selectTags } from "../../../../store/models/tags/selectors";

import FavoriteTags from "./components/FavoriteTags";
import Suggestions from "./components/Suggestions";

import { useStyles, CustomInput } from "./styles";

const Sidebar: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const dispatch = useDispatch();
  const tags = useSelector(selectTags);

  React.useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <div className={styles.wrapper}>
      <CustomInput placeholder='Поиск' fullWidth />
      <FavoriteTags tags={tags} />
      <Suggestions />
    </div>
  );
};

export default Sidebar;

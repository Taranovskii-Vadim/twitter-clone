import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTweet, setTweet } from "../../store/models/tweet/actions";
import {
  selectIsLoading,
  selectTweet,
} from "../../store/models/tweet/selectors";

import Tweet from "../Tweet";

const FullTweet: React.FC = (): JSX.Element => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweet);
  const isLoading = useSelector(selectIsLoading);

  React.useEffect(() => {
    dispatch(fetchTweet(params.id));
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [dispatch, params.id]);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center" }}>
        <CircularProgress />
      </div>
    );
  }

  if (tweet) {
    return <Tweet tweet={tweet} />;
  }
  // ! Если твита нет будет пустая страница(защита роутов редирект на 404)
  // ! Временно отображаем loader
  return (
    <div style={{ textAlign: "center" }}>
      <CircularProgress />
    </div>
  );
};

export default FullTweet;

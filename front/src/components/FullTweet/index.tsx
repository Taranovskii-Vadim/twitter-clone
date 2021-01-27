import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTweet } from "../../store/models/tweet/actions";
import { selectTweet } from "../../store/models/tweet/selectors";

import Tweet from "../Tweet";

const FullTweet: React.FC = (): JSX.Element => {
  const params: { id: string } = useParams();
  const dispatch = useDispatch();
  const tweet = useSelector(selectTweet);

  React.useEffect(() => {
    dispatch(fetchTweet(params.id));
  }, []);

  if (!tweet) {
    return <div>404 error</div>;
  }

  return <Tweet tweet={tweet} />;
};

export default FullTweet;

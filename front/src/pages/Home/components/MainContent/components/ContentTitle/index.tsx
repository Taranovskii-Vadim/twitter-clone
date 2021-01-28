import React from "react";
import { Route } from "react-router-dom";
import Typography from "@material-ui/core/Typography";

import FullTweet from "../../../../../../components/FullTweet";
import TweetForm from "../../../../../../components/TweetForm";
import BackButton from "../../../../../../components/ui/BackButton";
import SeparateLine from "../../../../../../components/ui/SeparateLine";

import { useStyles } from "./styles";

const ContentTitle = () => {
  const styles = useStyles();

  return (
    <>
      <div className={styles.header}>
        <Route path='/home' exact>
          <Typography variant='h6' className={styles.title}>
            Главная
          </Typography>
        </Route>
        <Route path={["/home/:id", "/search"]}>
          <BackButton />
          <Typography variant='h6' className={styles.title}>
            Твитнуть
          </Typography>
        </Route>
      </div>
      <Route path='/home/:id'>
        <FullTweet />
      </Route>
      <Route path={["/home", "/search"]} exact>
        <TweetForm />
        <SeparateLine />
      </Route>
    </>
  );
};

export default ContentTitle;

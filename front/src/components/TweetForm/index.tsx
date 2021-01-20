import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

import UserAvatar from "../ui/UserAvatar";

import { MAX_TEXTAREA_LENGTH } from "./constants";

import { useStyles } from "./styles";

const TweetForm = () => {
  const styles = useStyles();
  const [news, setNews] = React.useState<string>("");
  const [percent, setPercent] = React.useState<number>(0);

  const onChangeNewsHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setNews(e.currentTarget.value);
    setPercent((e.currentTarget.value.length * 100) / MAX_TEXTAREA_LENGTH);
  };

  return (
    <div className={styles.root}>
      <div className={styles.avatarBlock}>
        <UserAvatar size='small' />
      </div>
      <div className={styles.rootFormBlock}>
        <TextareaAutosize
          className={styles.rootTextArea}
          onChange={onChangeNewsHandler}
          value={news}
          rowsMin={4}
          maxLength={MAX_TEXTAREA_LENGTH}
          placeholder='Что происходит?'
        />
        <div className={styles.rootFormFooter}>
          <div className={styles.rootFormFooterItem}>
            <IconButton color='primary'>
              <ImageOutlinedIcon />
            </IconButton>
            <IconButton color='primary'>
              <SentimentSatisfiedOutlinedIcon />
            </IconButton>
          </div>
          <div className={styles.rootFormFooterItem}>
            {news ? (
              <>
                <span>{news.length}</span>
                <CircularProgress
                  style={{ marginLeft: 10 }}
                  size={20}
                  variant='determinate'
                  value={percent}
                />
              </>
            ) : null}
            <Button
              className={styles.rootFormFooterBtn}
              size='small'
              variant='contained'
              color='primary'
            >
              Твитнуть
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetForm;

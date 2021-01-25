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

interface IProps {
  padding?: string | number;
}

const TweetForm: React.FC<IProps> = ({ padding }): JSX.Element => {
  const styles = useStyles();
  const [news, setNews] = React.useState<string>("");
  const newsPercent = (news.length * 100) / MAX_TEXTAREA_LENGTH;

  const isLimit = news.length >= MAX_TEXTAREA_LENGTH;

  const CircularProgressStyle = {
    marginLeft: 10,
    color: isLimit ? "red" : "",
  };

  const onChangeNewsHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setNews(value);
  };

  return (
    <div style={{ padding }} className={styles.root}>
      <div className={styles.avatarBlock}>
        <UserAvatar size='small' />
      </div>
      <div className={styles.rootFormBlock}>
        <TextareaAutosize
          className={styles.rootTextArea}
          onChange={onChangeNewsHandler}
          value={news}
          rowsMin={4}
          placeholder='Что нового?'
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
                <span>
                  {isLimit ? MAX_TEXTAREA_LENGTH - news.length : news.length}
                </span>
                <CircularProgress
                  style={CircularProgressStyle}
                  size={20}
                  variant='determinate'
                  value={isLimit ? 100 : newsPercent}
                />
              </>
            ) : null}
            <Button
              className={styles.rootFormFooterBtn}
              disabled={isLimit}
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

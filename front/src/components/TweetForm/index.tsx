import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";

import UserAvatar from "../ui/UserAvatar";

import { addTweet } from "../../store/models/tweets/actions";
import { MAX_TEXTAREA_LENGTH } from "./constants";

import { useStyles } from "./styles";

interface IProps {
  padding?: string | number;
}

interface IFields {
  tweetText: string;
}

const TweetForm: React.FC<IProps> = ({ padding }): JSX.Element => {
  const styles = useStyles();
  const { register, setValue, handleSubmit, watch } = useForm<IFields>();
  const dispatch = useDispatch();

  const tweetText = watch("tweetText", "");

  const newsPercent = (tweetText.length * 100) / MAX_TEXTAREA_LENGTH;

  const isLimit = tweetText.length >= MAX_TEXTAREA_LENGTH;

  const CircularProgressStyle = {
    marginLeft: 10,
    color: isLimit ? "red" : "",
  };

  React.useEffect(() => {
    register("tweetText", { required: true });
  }, [register]);

  const onSubmit = (data: IFields) => {
    dispatch(addTweet(data.tweetText));
    setValue("tweetText", "");
  };

  const onChangeNewsHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;
    setValue("tweetText", value);
  };
  // TODO: Сделать loading button для формы выделить отдельный статус и сообщение
  // TODO: Подумать и придти к одному формату выведения ошибки
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ padding }}
      className={styles.root}
    >
      <div className={styles.avatarBlock}>
        <UserAvatar
          size='small'
          url='https://twizz.ru/wp-content/uploads/2020/10/1601624395_8c7dd922ad47494fc02c388e12c00eac.jpg'
        />
      </div>
      <div className={styles.rootFormBlock}>
        <TextareaAutosize
          className={styles.rootTextArea}
          onChange={onChangeNewsHandler}
          value={tweetText}
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
            {tweetText ? (
              <>
                <span>
                  {isLimit
                    ? MAX_TEXTAREA_LENGTH - tweetText.length
                    : tweetText.length}
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
              type='submit'
              disabled={!tweetText.length || isLimit}
              size='small'
              variant='contained'
              color='primary'
            >
              Твитнуть
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;

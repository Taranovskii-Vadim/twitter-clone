import React from "react";
import { Typography, Button } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";

import { useStyles } from "./styles";

interface RightSideProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

const RightSide: React.FC<RightSideProps> = ({
  onSignIn,
  onSignUp,
}): JSX.Element => {
  const styles = useStyles();
  return (
    <section className={styles.rightSide}>
      <div className={styles.enterBlock}>
        <TwitterIcon color='primary' className={styles.enterBlockIcon} />
        <Typography variant='h5' className={styles.enterBlockTitle}>
          Узнайте, что происходит в мире прямо сейчас
        </Typography>
        <Typography>
          <b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
        </Typography>
        <br />
        <Button
          onClick={onSignUp}
          style={{ marginBottom: 15 }}
          variant='contained'
          color='primary'
          fullWidth
        >
          Зарегистрироваться
        </Button>
        <Button onClick={onSignIn} variant='outlined' color='primary' fullWidth>
          Войти
        </Button>
      </div>
    </section>
  );
};

export default RightSide;

import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

import Modal from "../../components/Modal";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";

import { useStyles } from "./styles";

const Welcome = (): JSX.Element => {
  const styles = useStyles();
  const [isModalOpen, setIsModalOpen] = useState<"signIn" | "signUp">();

  return (
    <div className={styles.wrapper}>
      <LeftSide />
      <RightSide
        onSignIn={() => setIsModalOpen("signIn")}
        onSignUp={() => setIsModalOpen("signUp")}
      />
      <Modal
        title='Войти'
        visible={isModalOpen === "signIn"}
        onClose={() => setIsModalOpen(undefined)}
      >
        <TextField label='Электронный адрес' type='email' fullWidth />
        <TextField label='Пароль' type='password' fullWidth />
        <Button
          style={{ margin: "15px 0px 10px" }}
          variant='contained'
          onClick={() => setIsModalOpen(undefined)}
          color='primary'
          fullWidth
        >
          Войти
        </Button>
      </Modal>
      <Modal
        title='Регистрация'
        visible={isModalOpen === "signUp"}
        onClose={() => setIsModalOpen(undefined)}
      >
        <TextField label='Электронный адрес' type='email' fullWidth />
        <TextField label='Пароль' type='password' fullWidth />
        <Button
          style={{ margin: "15px 0px 10px" }}
          variant='contained'
          onClick={() => setIsModalOpen(undefined)}
          color='primary'
          fullWidth
        >
          Зарегистрироваться
        </Button>
      </Modal>
    </div>
  );
};

export default Welcome;

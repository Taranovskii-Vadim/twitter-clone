import React from "react";

import Modal from "../../components/Modal";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";

import { useStyles } from "./styles";

const Welcome: React.FC = (): JSX.Element => {
  const styles = useStyles();

  const [isModalOpen, setIsModalOpen] = React.useState<"signIn" | "signUp">();

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
        <SignInForm finishSubmit={() => setIsModalOpen(undefined)} />
      </Modal>
      <Modal
        title='Регистрация'
        visible={isModalOpen === "signUp"}
        onClose={() => setIsModalOpen(undefined)}
      >
        <SignUpForm finishSubmit={() => setIsModalOpen(undefined)} />
      </Modal>
    </div>
  );
};

export default Welcome;

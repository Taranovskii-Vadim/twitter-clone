import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface IProps {
  finishSubmit: () => void;
}

const SignInForm: React.FC<IProps> = ({ finishSubmit }): JSX.Element => {
  return (
    <form>
      <TextField label='Электронный адрес' type='email' fullWidth />
      <TextField label='Пароль' type='password' fullWidth />
      <Button
        style={{ margin: "15px 0px 10px" }}
        variant='contained'
        onClick={finishSubmit}
        color='primary'
        fullWidth
      >
        Войти
      </Button>
    </form>
  );
};

export default SignInForm;

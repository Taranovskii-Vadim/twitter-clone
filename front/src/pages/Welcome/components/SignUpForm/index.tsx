import React from "react";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

interface IForm {
  email: string;
  name: string;
  nickname: string;
  password: string;
  confirmPass: string;
}

interface IProps {
  finishSubmit: () => void;
}

const SignUpForm: React.FC<IProps> = ({ finishSubmit }): JSX.Element => {
  const { register, setValue, watch, handleSubmit, reset } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log(data);
    finishSubmit();
    reset();
  };

  React.useEffect(() => {
    register("email", { required: true });
    register("name", { required: true });
    register("nickname", { required: true });
    register("password", { required: true });
    register("confirmPass", { required: true });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='Электронный адрес'
        value={watch("email")}
        onChange={e => setValue("email", e.target.value)}
        type='email'
        fullWidth
      />
      <TextField
        label='Имя'
        type='text'
        value={watch("name")}
        onChange={e => setValue("name", e.target.value)}
        fullWidth
      />
      <TextField
        label='Ник'
        type='text'
        value={watch("nickname")}
        onChange={e => setValue("nickname", e.target.value)}
        fullWidth
      />
      <TextField
        label='Пароль'
        type='password'
        value={watch("password")}
        onChange={e => setValue("password", e.target.value)}
        fullWidth
      />
      <TextField
        label='Повторите пароль'
        value={watch("confirmPass")}
        onChange={e => setValue("confirmPass", e.target.value)}
        type='password'
        fullWidth
      />
      <Button
        style={{ margin: "15px 0px 10px" }}
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default SignUpForm;

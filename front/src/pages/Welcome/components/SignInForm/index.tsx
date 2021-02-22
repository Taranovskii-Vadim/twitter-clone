import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import { authApi, IAuthData } from "../../../../store/api/authApi";
import { getSnackBarConfig } from "../../../../helpers";

interface IProps {
  finishSubmit: () => void;
}

const schema = yup.object().shape({
  email: yup.string().email("Неверный формат email").required("Введите email"),
  password: yup
    .string()
    .min(6, "Длина пароля должна быть больше 6 символов")
    .required("Введите пароль"),
});

const SignInForm: React.FC<IProps> = ({ finishSubmit }): JSX.Element => {
  const { handleSubmit, control, errors, reset } = useForm<IAuthData>({
    resolver: yupResolver(schema),
  });

  const { enqueueSnackbar } = useSnackbar();

  const onSubmitHandler = async (data: IAuthData) => {
    try {
      const result = await authApi.signIn(data);
      finishSubmit();
      reset();
    } catch (e) {
      enqueueSnackbar("Неверный логин или пароль", getSnackBarConfig("error"));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <Controller
        name='email'
        control={control}
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            label='Электронный адрес'
            type='email'
            value={value}
            onChange={onChange}
            fullWidth
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ value, onChange }) => (
          <TextField
            label='Пароль'
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            style={{ margin: "15px 0px 10px" }}
            onChange={onChange}
            value={value}
            type='password'
            fullWidth
          />
        )}
      />
      <Button
        style={{ margin: "15px 0px 10px" }}
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
      >
        Войти
      </Button>
    </form>
  );
};

export default SignInForm;

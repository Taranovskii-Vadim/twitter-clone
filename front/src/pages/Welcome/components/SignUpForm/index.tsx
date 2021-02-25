import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ICreateData } from "../../../../store/models/user/types";
import { useDispatch } from "react-redux";
import { createUser } from "../../../../store/models/user/actions";

interface IProps {
  finishSubmit: () => void;
}

const schema = yup.object().shape({
  email: yup.string().email("Неверный формат email").required("Введите email"),
  name: yup
    .string()
    .min(2, "Длина имени должна быть больше 6 символов")
    .required("Введите имя"),
  password: yup
    .string()
    .min(6, "Длина пароля должна быть больше 6 символов")
    .required("Введите пароль"),
  confirmPass: yup
    .string()
    .min(6, "Длина пароля должна быть больше 6 символов")
    .required("Введите пароль"),
});

const SignUpForm: React.FC<IProps> = ({ finishSubmit }): JSX.Element => {
  const { control, errors, handleSubmit, reset } = useForm<ICreateData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = (data: ICreateData) => {
    dispatch(createUser(data));
    finishSubmit();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name='email'
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.email}
            helperText={errors.email ? errors.email.message : ""}
            label='Электронный адрес'
            value={value}
            onChange={onChange}
            type='email'
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name='name'
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ""}
            label='Имя'
            value={value}
            onChange={onChange}
            type='text'
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name='password'
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.password}
            helperText={errors.password ? errors.password.message : ""}
            label='Пароль'
            value={value}
            onChange={onChange}
            type='password'
            fullWidth
          />
        )}
      />
      <Controller
        control={control}
        name='confirmPass'
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.confirmPass}
            helperText={errors.confirmPass ? errors.confirmPass.message : ""}
            label='Повторите пароль'
            value={value}
            onChange={onChange}
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
        Зарегистрироваться
      </Button>
    </form>
  );
};

export default SignUpForm;

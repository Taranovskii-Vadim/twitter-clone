import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const schema = yup.object().shape({
  email: yup.string().email("Неверный формат email").required("Введите email"),
  name: yup
    .string()
    .min(2, "Длина имени должна быть больше 6 символов")
    .required("Введите имя"),
  nickname: yup
    .string()
    .min(2, "Длина ника должна быть больше 6 символов")
    .max(15, "Длина ника должна быть меньше 15 символов")
    .required("Введите ник"),
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
  const { control, errors, handleSubmit, reset } = useForm<IForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IForm) => {
    console.log(data);
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
        name='nickname'
        render={({ value, onChange }) => (
          <TextField
            error={!!errors.nickname}
            helperText={errors.nickname ? errors.nickname.message : ""}
            label='Ник'
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

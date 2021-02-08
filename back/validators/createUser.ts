import { body } from "express-validator";
import { userModel } from "../models/UserModel";

export const createUserValidator = [
  body("name", "Укажите имя")
    .isLength({ min: 2 })
    .withMessage("Длина имени не должна быть меньше 2 символов")
    .trim(),
  body("nickname", "Укажите ник")
    .isLength({ min: 2, max: 15 })
    .withMessage("Длина ника должна быть от 2 до 15 символов")
    .trim(),
  body("password", "Укажите пароль")
    .isLength({ min: 6 })
    .withMessage("Длина пароля должна быть не менее 6 символов")
    .trim(),
  body("confirmPass", "Укажите пароль еще раз").custom((value, { req }) => {
    if (value != req.body.password) {
      throw new Error("Пароли должны совпадать");
    }
    return true;
  }),
  body("email", "Укажите email")
    .isLength({ min: 10 })
    .withMessage("Длина email должна быть больше 10 символов")
    .isEmail()
    .withMessage("Неверный формат email")
    .custom(async value => {
      try {
        const user = await userModel.findOne({ email: value });
        if (user) {
          return Promise.reject("Данный email уже существует");
        }
      } catch (e) {
        console.log(e);
      }
    }),
];

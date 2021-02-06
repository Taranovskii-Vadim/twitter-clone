import { body } from "express-validator";

import { UserModel } from "../models/UserModel";

export const registerValidator = [
  body("email", "Введите email")
    .isEmail()
    .withMessage("Неверный формат email")
    .isLength({ min: 10 })
    .withMessage("Слишком короткий email")
    .custom(async (value, { req }) => {
      try {
        const user = await UserModel.findOne({ email: value });
        if (user) {
          return Promise.reject("Пользователь уже существует");
        }
      } catch (e) {
        console.log(e);
      }
    })
    .normalizeEmail()
    .trim(),
  body("name", "Введите имя")
    .isLength({ min: 2 })
    .withMessage("Слишком короткое имя")
    .trim(),
  body("nickname", "Неверный ник")
    .isLength({ min: 2 })
    .withMessage("Слишком короткий ник")
    .trim(),
  body("password", "Введите пароль").isLength({ min: 6 }).trim(),
  body("confirmPass")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Пароли должные совпадать");
      }
      return true;
    })
    .trim(),
];

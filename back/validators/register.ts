import { body } from "express-validator";

export const registerValidator = [
  body("email", "Неверный email")
    .isEmail()
    .isLength({ min: 10 })
    .normalizeEmail()
    .trim(),
  body("name", "Неверный формат имени").isLength({ min: 2 }).trim(),
  body("nickname", "Неверный ник").isLength({ min: 2 }).trim(),
  body("password", "Неверный формат пароля").isLength({ min: 6 }).trim(),
  body("confirmPass")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Пароли должные совпадать");
      }
      return true;
    })
    .trim(),
];

import express from "express";
import { validationResult } from "express-validator";

import { userModel } from "../models/UserModel";
import { IUser } from "../models/UserModel/types";
import { getMd5Hash } from "../utils/getMd5Hash";
import { sendEmail } from "../utils/sendEmail";

class UserController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      const data: IUser = {
        name: req.body.name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        confirmedHash: getMd5Hash(
          process.env.SECRET_KEY || Math.random().toString()
        ),
      };

      const user = await userModel.create(data);

      sendEmail(
        {
          from: "admin@twitter.com",
          to: data.email,
          subject: "Поздравлем с регистрацией на сайте",
          html: `Для подтверждения вашего аккаунта перейдите по указанной <a href="http://localhost:${
            process.env.PORT || 3001
          }/users/verify?hash=${data.confirmedHash}">ссылке</a>`,
        },
        err => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.json(user);
          }
        }
      );
    } catch (e) {
      console.log(e);
    }
  }
  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash;
      if (!hash) {
        res.status(500).json("URL адрес несуществует");
      }
      const user = await userModel.findOne({ confirmedHash: hash.toString() });
      user.confirmed = true;
      await user.save();
    } catch (e) {
      res.status(500).json("Не удалось обновить информацию о пользователе");
    }
  }
}

export const userController = new UserController();

import * as express from "express";
import { validationResult } from "express-validator";
import { IUser, UserModel } from "../models/UserModel";

import { generateMD5Hash } from "../utils/getMD5Hash";
import { sendEmail } from "../utils/sendEmail";

class UserController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const users = await UserModel.find({});
      res.json(users);
    } catch (e) {
      res.status(404).send(e);
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
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
        confirmed_hash: generateMD5Hash(
          process.env.SECRET_KEY || Math.random().toString()
        ),
      };

      const user = await UserModel.create(data);

      sendEmail(
        {
          from: "admin@twitter.com",
          to: req.body.email,
          subject: "Вы успешно зарегистрированы в твитере",
          html: `Для того, чтобы подтвердить почту, перейдите <a href="http://localhost:${
            process.env.PORT || 3001
          }/users/verify?hash=${data.confirmed_hash}">по указанной ссылке</a>`,
        },
        err => {
          if (err) {
            res.json(err);
          } else {
            res.json(user);
          }
        }
      );
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const hash: string = req.query.hash.toString();
      if (!hash) {
        res.status(400).send("Hash отсутствует");
      }
      const user = await UserModel.findOne({ confirmed_hash: hash });
      user.confirmed = true;
      await user.save();
      res.status(201).json("Success");
    } catch (e) {
      res.status(500).send("Произошла ошибка");
    }
  }
}

export const userController = new UserController();

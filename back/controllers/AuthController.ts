import express from "express";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import { userModel } from "../models/UserModel";
import { IUser, TUser } from "../models/UserModel/types";
import { getFormatedUser } from "../utils/getFormatedUser";

import { getMd5Hash } from "../utils/getMd5Hash";
import { sendEmail } from "../utils/sendEmail";
import { sendError, sendSuccess, unknownError } from "../utils/sendResponse";

class AuthController {
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }

      const data: IUser = {
        name: req.body.name,
        nickname: `Test${Math.ceil(Math.random() * 100)}`,
        email: req.body.email,
        password: getMd5Hash(req.body.password + process.env.SECRET_KEY),
        confirmedHash: getMd5Hash(
          process.env.SECRET_KEY + Math.random().toString()
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
          }/auth/verify?hash=${data.confirmedHash}">ссылке</a>`,
        },
        err => {
          if (err) {
            res.status(500).json(sendError(err));
          } else {
            res.status(201).json(user);
          }
        }
      );
    } catch (e) {
      console.log(e);
      res.status(500).json(unknownError());
    }
  }
  async verify(req: express.Request, res: express.Response): Promise<void> {
    try {
      const hash = req.query.hash;
      if (!hash) {
        res.status(500).json(sendError("URL адрес несуществует"));
      }
      const user = await userModel.findOne({ confirmedHash: hash.toString() });
      user.confirmed = true;
      await user.save();
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async addToken(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as TUser).toJSON() : undefined;
      res.json(
        sendSuccess(
          getFormatedUser({
            ...user,
            token: jwt.sign({ data: user }, process.env.SECRET_KEY, {
              expiresIn: "30d",
            }),
          })
        )
      );
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
}

export const authController = new AuthController();

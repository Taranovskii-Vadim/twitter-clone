import * as express from "express";
import { validationResult } from "express-validator";
import { UserModel } from "../models/UserModel";
import { generateMD5Hash } from "../utils/getMD5Hash";

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
      console.log(req.body);
      const user = await UserModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        nickname: req.body.nickname,
        confirmed_hash: generateMD5Hash(
          process.env.SECRET_KEY || Math.random().toString()
        ),
      });
      res.json(user);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export const userController = new UserController();

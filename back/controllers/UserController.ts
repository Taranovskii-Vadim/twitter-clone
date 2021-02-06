import * as express from "express";
import { UserModel } from "../models/UserModel";

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
      console.log(req.body);
    } catch (e) {
      res.status(500).send(e);
    }
  }
}

export const userController = new UserController();

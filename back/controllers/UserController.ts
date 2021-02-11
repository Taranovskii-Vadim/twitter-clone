import express from "express";
import mongoose from "mongoose";

import { userModel } from "../models/UserModel";

const isValidObjectId = (value: string) => mongoose.isValidObjectId(value);

class UserController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const users = await userModel.find();
      res.status(200).json(users);
    } catch (e) {
      res.status(500).send(e);
    }
  }
  async show(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;
      if (!isValidObjectId(userId)) {
        res.status(400).json({ message: "User id is not valid" });
        return;
      }
      const user = await userModel.findById(userId);

      res.json(user);
    } catch (e) {
      res.status(404).json({ message: "User not found" });
    }
  }
}

export const userController = new UserController();

import express from "express";
import mongoose from "mongoose";

import { userModel } from "../models/UserModel";
import { TUser } from "../models/UserModel/types";
import { getFormatedUser } from "../utils/getFormatedUser";
import { sendError, unknownError } from "../utils/sendResponse";

const isValidObjectId = (value: string) => mongoose.isValidObjectId(value);
// TODO:Разобраться с возвращаемыми объектами
class UserController {
  async index(_, res: express.Response): Promise<void> {
    try {
      const data = await userModel.find();
      res.status(200).json(
        data.map(item => ({
          id: item._id,
          name: item.name,
          nickname: item.nickname,
        }))
      );
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async getOne(req: express.Request, res: express.Response): Promise<void> {
    try {
      const userId = req.params.id;
      if (!isValidObjectId(userId)) {
        res.status(400).json(sendError("User id is not valid"));
        return;
      }
      const user = await userModel.findById(userId);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json(sendError("Пользователь не найден"));
      }
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async getMyself(req: express.Request, res: express.Response): Promise<void> {
    try {
      const user = req.user ? (req.user as TUser).toJSON() : undefined;
      res.status(200).json(getFormatedUser({ ...user, token: "" }));
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
}

export const userController = new UserController();

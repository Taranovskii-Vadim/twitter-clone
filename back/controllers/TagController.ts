import * as express from "express";
import { TagModel } from "../models/TagModel";

class TagController {
  async index(req: express.Request, res: express.Response): Promise<void> {
    try {
      const tags = await TagModel.find({});
      res.status(200).json(tags);
    } catch (e) {
      res.status(500).send("Не удалось получить темы");
    }
  }
}

export const tagController = new TagController();

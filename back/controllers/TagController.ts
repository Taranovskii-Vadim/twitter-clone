import express from "express";
import { tagModel } from "../models/TagModel";
import { getFormatedTag } from "../utils/getFormatedTag";
import { sendSuccess, unknownError } from "../utils/sendResponse";

class TagController {
  async index(req: express.Request, res: express.Response) {
    try {
      const tags = await tagModel.find();
      res.status(200).json(sendSuccess(tags.map(item => getFormatedTag(item))));
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
}

export const tagController = new TagController();

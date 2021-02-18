import express from "express";
import { validationResult } from "express-validator";
import { isValidObjectId } from "mongoose";

import { tweetModel } from "../models/TweetModel";
import { ITweet } from "../models/TweetModel/types";
import { TUser } from "../models/UserModel/types";
import { getFormattedTweet } from "../utils/getFormatedTweet";
import { sendError, sendSuccess, unknownError } from "../utils/sendResponse";

class TweetController {
  async index(_, res: express.Response): Promise<void> {
    try {
      const data = await tweetModel
        .find()
        .populate("user")
        .sort({ createdAt: "-1" });
      const tweets = data.map(item => getFormattedTweet(item));
      res.status(200).json(sendSuccess(tweets));
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async getOne(req: express.Request, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;
      if (!isValidObjectId(tweetId)) {
        res.status(400).json(sendError("Некорректный адрес"));
        return;
      }
      const data = await tweetModel.findById(tweetId).populate("user").exec();
      if (!data) {
        res.status(404).json(sendError("Данного твита не существует"));
      }
      const tweet = getFormattedTweet(data);
      res.status(200).json(sendSuccess(tweet));
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async create(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
      const user = req.user as TUser;
      if (user) {
        const data: ITweet = {
          text: req.body.text,
          user: user._id,
        };
        const tweet = await tweetModel.create(data);
        const result = await tweet.populate("user").execPopulate();
        res.status(201).json(sendSuccess(getFormattedTweet(result)));
      } else {
        res.status(401).json(sendError("Необходимо авторизоваться"));
      }
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async delete(req: express.Request, res: express.Response): Promise<void> {
    try {
      const tweetId = req.params.id;
      const user = req.user as TUser;
      if (!isValidObjectId(tweetId)) {
        res.status(400).json(sendError("Некорректный адрес"));
        return;
      }
      const tweet = await tweetModel.findById(tweetId);
      if (tweet) {
        if (String(tweet.user) === String(user._id)) {
          await tweet.remove();
          res.status(200).json({ status: "success" });
        } else {
          res.status(403).json(sendError("Данный твит нельзя удалить"));
        }
      } else {
        res.status(404).json(sendError("Данного твита не существует"));
      }
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
  async update(req: express.Request, res: express.Response): Promise<void> {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
      }
      const tweetId = req.params.id;
      if (!isValidObjectId(tweetId)) {
        res.status(400).json(sendError("URL адрес некорректный"));
        return;
      }
      const tweet = await tweetModel.findById(tweetId).populate("user").exec();
      if (tweet) {
        tweet.text = req.body.text;
        await tweet.save();
        res.status(200).json(getFormattedTweet(tweet));
      } else {
        res.status(404).json(sendError("Твит не существует"));
      }
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
}

export const tweetController = new TweetController();

import express from "express";
import { validationResult } from "express-validator";
import { isValidObjectId } from "mongoose";

import { tweetModel } from "../models/TweetModel";
import { ITweet } from "../models/TweetModel/types";
import { TUser } from "../models/UserModel/types";
import { sendError, unknownError } from "../utils/sendError";

class TweetController {
  async index(_, res: express.Response): Promise<void> {
    try {
      const data = await tweetModel.find().populate("user");
      const tweets = data.map(item => ({
        id: item.id,
        text: item.text,
        date: item.date,
        user: {
          id: item.user._id,
          name: item.user.name,
          nickname: item.user.nickname,
        },
      }));
      res.status(200).json(tweets);
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
      res.status(200).json({
        id: data._id,
        text: data.text,
        date: data.date,
        user: {
          id: data.user._id,
          name: data.user.name,
          nickname: data.user.nickname,
        },
      });
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
        res.status(201).json(tweet);
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
      const tweet = await tweetModel.findById(tweetId);
      if (tweet) {
        tweet.text = req.body.text;
        await tweet.save();
        res.status(200).json(tweet);
      } else {
        res.status(404).json(sendError("Твит не существует"));
      }
    } catch (e) {
      res.status(500).json(unknownError());
    }
  }
}

export const tweetController = new TweetController();

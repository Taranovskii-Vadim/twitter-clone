import { Router } from "express";
import { tweetController } from "../controllers/TweetController";
import { appPassport } from "../core/passport";
import { addTweetValidator } from "../validators/createTweet";

const router = Router();

router.get("/", tweetController.index);

router.get("/:id", tweetController.getOne);

router.post(
  "/",
  appPassport.authenticate("jwt", { session: false }),
  addTweetValidator,
  tweetController.create
);

router.delete(
  "/:id",
  appPassport.authenticate("jwt", { session: false }),
  tweetController.delete
);

export { router as TweetRouter };

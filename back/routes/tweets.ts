import { Router } from "express";
import { tweetController } from "../controllers/TweetController";
import { appPassport } from "../core/passport";
import { tweetValidator } from "../validators/tweetValidator";

const router = Router();

router.get("/", tweetController.index);

router.get("/:id", tweetController.getOne);

router.post(
  "/",
  appPassport.authenticate("jwt", { session: false }),
  tweetValidator,
  tweetController.create
);

router.patch(
  "/:id",
  appPassport.authenticate("jwt", { session: false }),
  tweetValidator,
  tweetController.update
);

router.delete(
  "/:id",
  appPassport.authenticate("jwt", { session: false }),
  tweetController.delete
);

export { router as TweetRouter };

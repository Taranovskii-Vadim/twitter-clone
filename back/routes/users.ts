import { Router } from "express";

import { userController } from "../controllers/UserController";
import { appPassport } from "../core/passport";

const router = Router();

router.get(
  "/me",
  appPassport.authenticate("jwt", { session: false }),
  userController.getMyself
);

router.get("/", userController.index);

router.get("/:id", userController.getOne);

export { router as UsersRouter };

import { Router } from "express";

import { authController } from "../controllers/AuthController";
import { appPassport } from "../core/passport";
import { signUpValidator } from "../validators/createUser";

const router = Router();

router.post("/signUp", signUpValidator, authController.create);

router.post(
  "/signIn",
  appPassport.authenticate("local"),
  authController.addToken
);

router.get("/verify", authController.verify);

export { router as AuthRouter };

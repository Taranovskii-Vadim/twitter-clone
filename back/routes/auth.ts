import express, { Router } from "express";
import { passport } from "../core/passport";
import { authController } from "../controllers/AuthController";
import { createUserValidator } from "../validators/createUser";

const router = Router();

router.post("/signUp", createUserValidator, authController.create);

router.get("/verify", authController.verify);

router.post(
  "/signIn",
  passport.authenticate("local"),
  (req: express.Request, res: express.Response) => {
    res.json(req.user);
  }
);

export { router };

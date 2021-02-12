import { Router } from "express";
import { passport } from "../core/passport";

import { userController } from "../controllers/UserController";
import { createUserValidator } from "../validators/createUser";

const router = Router();

router.get("/", userController.index);

router.get("/me", passport.authenticate("jwt"), userController.getMySelf);

router.get("/:id", userController.getOne);

router.post("/signUp", createUserValidator, userController.create);

router.get("/verify", userController.verify);

router.post("/signIn", passport.authenticate("local"), userController.addToken);

export { router };

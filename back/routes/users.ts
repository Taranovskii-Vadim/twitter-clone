import { Router } from "express";

import { userController } from "../controllers/UserController";
import { createUserValidator } from "../validators/createUser";

const router = Router();

router.get("/", userController.index);

router.get("/:id", userController.show);

router.post("/", createUserValidator, userController.create);

router.get("/verify", userController.verify);

export { router };

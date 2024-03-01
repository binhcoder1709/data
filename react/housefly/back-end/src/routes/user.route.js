import express from "express";
import {
  createAccountController,
  getAllUsersController,
  loginUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", getAllUsersController);
userRouter.post("/login", loginUser);
userRouter.post("/register", createAccountController);

export default userRouter;

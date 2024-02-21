import asyncHandler from "express-async-handler";
import { UserService } from "../services/user.service.js";
import { getPaginateParams } from "../utils/common.js";

const userService = new UserService();

export const getUsers = asyncHandler(async (req, res) => {
  const { page, limit } = getPaginateParams(req.params);

  const users = await userService.getUsers({}, page, limit);
  if (!users) {
    throw new Error("An error occurred while fetching users");
  }

  res.status(200).json(users);
});

export const createUser = asyncHandler(async (req, res) => {
  const user = await userService.createUser(req.body);
  if (!user) {
    throw new Error("Something wrong");
  }
  res.status(200).json(user);
});

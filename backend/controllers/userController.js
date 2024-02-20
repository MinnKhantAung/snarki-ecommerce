import asyncHandler from "express-async-handler";
import { UserService } from "../services/user.service.js";

const userService = new UserService();

export const getUsers = asyncHandler(async (req, res) => {
  var page = req.params.page ? req.params.page : 1;
  var limit = req.params.limit ? req.params.limit : 10;
  const users = userService.getUsers({}, page, limit);
  if (users) {
    res.status(200).json(users);
  } else {
    throw new Error("An error occurred while fetching users");
  }
});

export const createUser = asyncHandler(async (res, req) => {
  // const {name, email}
});

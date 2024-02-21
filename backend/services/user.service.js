import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { ROLE } from "../types/role.js";

const prisma = new PrismaClient();

export class UserService {
  async getUsers(query, page, limit) {
    const users = await prisma.user.findMany(query);
    return users;
  }

  async createUser(data) {
    const { name, email, password, role } = data;

    if (!name || !email || !password) {
      throw new Error("Name, Email and Password are Required!");
    }

    const userRole = role ?? ROLE.BUYER;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = {
      name,
      email,
      password: hashedPassword,
      role: userRole,
    };

    return await prisma.user.create({
      data: createUser,
    });
  }
}

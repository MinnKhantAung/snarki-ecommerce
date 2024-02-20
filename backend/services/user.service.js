import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class UserService {
  async getUsers(query, page, limit) {
    const users = await prisma.user.findMany(query);
    return users;
  }
}

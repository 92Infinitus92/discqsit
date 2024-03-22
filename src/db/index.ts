import { PrismaClient } from "@prisma/client";

declare global {
  // For TypeScript to recognize "global"
  var prisma: PrismaClient | undefined;
}

export const db = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") global.prisma = db;

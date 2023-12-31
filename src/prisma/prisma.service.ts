import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: "postgresql://postgres:admin@localhost:5433/dashwashdb?schema=public",
        },
      },
    });
  }
}

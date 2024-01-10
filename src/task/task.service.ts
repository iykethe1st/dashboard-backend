import { Injectable } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  // This resets the daily order every morning by 5:00 AM
  @Cron("0 0 5 * * 1-7")
  async resetDailyOrder() {
    await this.prisma.courier.updateMany({
      data: { dailyOrderCount: 0 },
    });
  }
}

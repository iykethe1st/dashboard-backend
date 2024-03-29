import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { EditCourierDto } from "./dto";

@Injectable()
export class CourierService {
  constructor(private prisma: PrismaService) {}

  getMe() {
    return {};
  }

  async editCourier(courierId: number, dto: EditCourierDto) {
    const courier = await this.prisma.courier.update({
      where: {
        id: courierId,
      },
      data: {
        ...dto,
        dailyOrderCount: parseInt(dto.dailyOrderCount),
      },
    });
    delete courier.hash;
    return courier;
  }
}

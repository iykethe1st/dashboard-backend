import { ForbiddenException, Injectable } from "@nestjs/common";
import { CreateOrderDto, EditOrderDto } from "./dto";
import { PrismaService } from "src/prisma/prisma.service";
import { generateOrderNumber } from "./utils";
import { GetOrder } from "./decorator";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}
  getOrders(userId: number) {
    return this.prisma.order.findMany({
      where: {
        userId,
      },
    });
  }

  getOrderById(userId: number, orderId: string) {
    console.log({ orderId });
    console.log({ userId });
    return this.prisma.order.findFirstOrThrow({
      where: {
        userId,
        orderId,
      },
    });
  }

  async createOrder(userId: number, dto: CreateOrderDto) {
    const currentDate = new Date();
    const dueDate = new Date(currentDate);
    dueDate.setDate(currentDate.getDate() + 1);

    const orderId = generateOrderNumber();

    const orderStatus = "Pending";

    const newOrder = await this.prisma.order.create({
      data: {
        userId,
        dueDate,
        orderId,
        orderStatus,
        ...dto,
      },
    });
    return newOrder;
  }

  async editOrderById(
    // @GetOrder("id") id: number,
    userId: number,
    orderId: string,
    dto: EditOrderDto
  ) {
    const order = await this.prisma.order.update({
      where: {
        orderId,
        userId,
      },
      data: { ...dto },
    });
    return order;
  }

  async deleteOrderById(userId: number, orderId: string) {
    console.log({ userId });
    console.log({ orderId });

    try {
      await this.prisma.order.delete({
        where: {
          orderId,
          userId,
        },
      });
      return {
        message: `Order ${orderId} successfully deleted`,
      };
    } catch (error) {
      if (error.code === "P2025")
        throw new ForbiddenException("Order does not exist");
      throw error;
    }
  }
}

import { Injectable } from "@nestjs/common";
import { CreateOrderDto, EditOrderDto } from "./dto";

@Injectable()
export class OrderService {
  getOrders(userId: number) {}

  getOrderById(userId: number, orderId: string) {}

  createOrder(userId: number, dto: CreateOrderDto) {}

  editOrderById(userId: number, dto: EditOrderDto) {}

  deleteOrderById(userId: number, orderId: string) {}
}

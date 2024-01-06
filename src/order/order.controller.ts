import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { OrderService } from "./order.service";
import { GetUser } from "src/auth/decorator";
import { CreateOrderDto, EditOrderDto } from "./dto";

@UseGuards(JwtGuard)
@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get("history")
  getOrders(@GetUser("userId") userId: number) {
    return this.orderService.getOrders(userId);
  }

  @Get(":id")
  getOrderById(
    @GetUser("userId") userId: number,
    @Param("id") orderId: string
  ) {
    this.orderService.getOrderById(userId, orderId);
  }

  @Post("create")
  createOrder(@GetUser("userId") userId: number, @Body() dto: CreateOrderDto) {
    this.orderService.createOrder(userId, dto);
  }

  @Patch()
  editOrderById(@GetUser("userId") userId: number, @Body() dto: EditOrderDto) {
    this.orderService.editOrderById(userId, dto);
  }

  @Delete(":id")
  deleteOrderById(
    @GetUser("userId") userId: number,
    @Param("id") orderId: string
  ) {
    this.orderService.deleteOrderById(userId, orderId);
  }
}

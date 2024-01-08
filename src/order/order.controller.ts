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
import { GetOrder } from "./decorator";

@UseGuards(JwtGuard)
@Controller("order")
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get("history")
  getOrders(@GetUser("id") userId: number) {
    return this.orderService.getOrders(userId);
  }

  @Get(":orderId")
  getOrderById(
    @GetUser("id") userId: number,
    @Param("orderId") orderId: string
  ) {
    return this.orderService.getOrderById(userId, orderId);
  }

  @Post("create")
  createOrder(@GetUser("id") userId: number, @Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(userId, dto);
  }

  @Patch("edit/:orderId")
  editOrderById(
    // @GetOrder("id") id: number,
    @GetUser("id") userId: number,
    @Param("orderId") orderId: string,
    @Body() dto: EditOrderDto
  ) {
    return this.orderService.editOrderById(userId, orderId, dto);
  }

  @Delete("delete/:orderId")
  deleteOrderById(
    @GetUser("id") userId: number,
    @Param("orderId") orderId: string
  ) {
    return this.orderService.deleteOrderById(userId, orderId);
  }
}

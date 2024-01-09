import { Controller, Get, UseGuards } from "@nestjs/common";
import { CourierService } from "./courier.service";
import { GetCourier } from "src/auth/courier/decorator";
import { Courier } from "@prisma/client";
import { JwtCourierGuard } from "src/auth/courier/guard";

@UseGuards(JwtCourierGuard)
@Controller("courier")
export class CourierController {
  constructor(private courierService: CourierService) {}

  @Get("me")
  getMe(@GetCourier() courier: Courier) {
    return courier;
  }
}

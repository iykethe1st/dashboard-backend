import { Body, Controller, Get, Patch, UseGuards } from "@nestjs/common";
import { CourierService } from "./courier.service";
import { GetCourier } from "src/auth/courier/decorator";
import { Courier } from "@prisma/client";
import { JwtCourierGuard } from "src/auth/courier/guard";
import { EditCourierDto } from "./dto";

@UseGuards(JwtCourierGuard)
@Controller("courier")
export class CourierController {
  constructor(private courierService: CourierService) {}

  @Get("me")
  getMe(@GetCourier() courier: Courier) {
    return courier;
  }

  @Patch("edit")
  editCourier(
    @GetCourier("id") courierId: number,
    @Body() dto: EditCourierDto
  ) {
    console.log({ courierId });
    return this.courierService.editCourier(courierId, dto);
  }
}

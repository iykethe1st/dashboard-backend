import { Controller, Get, UseGuards } from "@nestjs/common";
import { JwtGuard } from "src/auth/guard";
import { CourierService } from "./courier.service";

@UseGuards(JwtGuard)
@Controller("courier")
export class CourierController {
  constructor(private courierService: CourierService) {}

  @Get("me")
  getMe() {}
}

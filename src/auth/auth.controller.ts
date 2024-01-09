import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthUserDto } from "./user/dto";
import { AuthCourierDto } from "./courier/dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("user/signup")
  signup(@Body() dto: AuthUserDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("user/login")
  login(@Body() dto: AuthUserDto) {
    return this.authService.login(dto);
  }

  @Post("courier/signup")
  courierSignup(@Body() dto: AuthCourierDto) {
    return this.authService.courierSignup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("courier/login")
  courierLogin(@Body() dto: AuthCourierDto) {
    return this.authService.courierLogin(dto);
  }
}

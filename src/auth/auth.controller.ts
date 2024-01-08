import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("user/signup")
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("user/login")
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Post("courier/signup")
  courierSignup(@Body() dto: AuthDto) {
    return this.authService.courierSignup(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post("courier/login")
  courierLogin(@Body() dto: AuthDto) {
    return this.authService.courierLogin(dto);
  }
}

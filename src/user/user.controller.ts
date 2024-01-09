import { Body, Controller, Get, Patch, Req, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";
import { GetUser } from "src/auth/user/decorator";
import { JwtGuard } from "src/auth/user/guard";

@UseGuards(JwtGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get("me")
  getMe(@GetUser() user: User, @GetUser("email") email: string) {
    return user;
  }

  @Patch()
  editUser(@GetUser("userId") userId: number, @Body() dto: EditUserDto) {
    this.userService.editUser(userId, dto);
  }
}

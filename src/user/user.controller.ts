import { Body, Controller, Get, Patch, Req, UseGuards } from "@nestjs/common";
import { User } from "@prisma/client";
import { EditUserDto } from "./dto";
import { UserService } from "./user.service";
import { GetUser } from "src/auth/user/decorator";
import { JwtUserGuard } from "src/auth/user/guard";

@UseGuards(JwtUserGuard)
@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}
  @Get("me")
  getMe(@GetUser() user: User) {
    return user;
  }

  @Patch()
  editUser(@GetUser("id") userId: number, @Body() dto: EditUserDto) {
    console.log({ userId });

    this.userService.editUser(userId, dto);
  }
}

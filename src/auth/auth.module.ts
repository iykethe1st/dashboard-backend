import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { JwtUserStrategy } from "./user/strategy";
import { JwtCourierStrategy } from "./courier/strategy";

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtUserStrategy, JwtCourierStrategy],
})
export class AuthModule {}

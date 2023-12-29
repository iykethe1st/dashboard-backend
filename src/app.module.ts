import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";

@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb+srv://admin:admin@dashwashcluster.phuj3zi.mongodb.net/?retryWrites=true&w=majority"
    ),
    AuthModule,
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

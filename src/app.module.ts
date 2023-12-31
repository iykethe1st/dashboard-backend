import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { ThrottlerModule } from "@nestjs/throttler";
import { PrismaModule } from "./prisma/prisma.module";

@Module({
  imports: [
    // MongooseModule.forRoot(process.env.DATABASE_URL),
    // MongooseModule.forRoot(
    //   "mongodb+srv://admin:admin@dashwashcluster.phuj3zi.mongodb.net/?retryWrites=true&w=majority"
    // ),
    // MongooseModule.forRoot(process.env.DATABASE_URI, {
    //   dbName: process.env.DATABASE_NAME,
    //   auth: {
    //     username: process.env.DATABASE_USER,
    //     password: process.env.DATABASE_PASS,
    //   },
    // }),
    ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
    AuthModule,
    UserModule,
    PrismaModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}

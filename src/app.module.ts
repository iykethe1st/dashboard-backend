import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { PrismaModule } from "./prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { OrderController } from './order/order.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
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
    JwtModule,
  ],
  controllers: [AuthController, OrderController],
  providers: [AuthService],
})
export class AppModule {}

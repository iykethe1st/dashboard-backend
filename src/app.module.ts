import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ScheduleModule } from "@nestjs/schedule";
import { ThrottlerModule } from "@nestjs/throttler";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./user/user.module";
import { AuthController } from "./auth/auth.controller";
import { AuthService } from "./auth/auth.service";
import { PrismaModule } from "./prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { OrderController } from "./order/order.controller";
import { OrderService } from "./order/order.service";
import { OrderModule } from "./order/order.module";
import { CourierModule } from "./courier/courier.module";
import { TaskService } from './task/task.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
    ScheduleModule.forRoot(),
    AuthModule,
    UserModule,
    PrismaModule,
    JwtModule,
    OrderModule,
    CourierModule,
  ],
  controllers: [AuthController, OrderController],
  providers: [AuthService, OrderService, TaskService],
})
export class AppModule {}

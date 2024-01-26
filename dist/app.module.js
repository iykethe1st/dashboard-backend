"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const throttler_1 = require("@nestjs/throttler");
const auth_module_1 = require("./auth/auth.module");
const user_module_1 = require("./user/user.module");
const auth_controller_1 = require("./auth/auth.controller");
const auth_service_1 = require("./auth/auth.service");
const prisma_module_1 = require("./prisma/prisma.module");
const jwt_1 = require("@nestjs/jwt");
const order_controller_1 = require("./order/order.controller");
const order_service_1 = require("./order/order.service");
const order_module_1 = require("./order/order.module");
const courier_module_1 = require("./courier/courier.module");
const task_service_1 = require("./task/task.service");
const events_module_1 = require("./events/events.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60, limit: 10 }]),
            schedule_1.ScheduleModule.forRoot(),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            prisma_module_1.PrismaModule,
            jwt_1.JwtModule,
            order_module_1.OrderModule,
            courier_module_1.CourierModule,
            events_module_1.EventsModule,
        ],
        controllers: [auth_controller_1.AuthController, order_controller_1.OrderController],
        providers: [auth_service_1.AuthService, order_service_1.OrderService, task_service_1.TaskService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
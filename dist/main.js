"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
const compression = require("compression");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle("DashWash")
        .setDescription("The DashWash API Documentation")
        .setVersion("1.0")
        .addTag("Laundry")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.enableCors({ origin: "*" });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.use((0, helmet_1.default)());
    app.use(compression());
    await app.listen(4000, () => {
        console.log("====================================");
        console.log("Listening at http://localhost/4000");
        console.log("====================================");
    });
}
bootstrap();
//# sourceMappingURL=main.js.map
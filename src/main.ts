import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe, VersioningType } from "@nestjs/common";
import helmet from "helmet";
import * as compression from "compression";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("DashWash")
    .setDescription("The DashWash API Documentation")
    .setVersion("1.0")
    .addTag("Laundry")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.enableCors({ origin: "*" });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.enableVersioning({ type: VersioningType.URI });
  app.use(helmet());
  app.use(compression());

  await app.listen(4000, () => {
    console.log("====================================");
    console.log("Listening at http://localhost/4000");
    console.log("====================================");
  });
}
bootstrap();

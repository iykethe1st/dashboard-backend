import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
  console.log("====================================");
  console.log("Listening at http://localhost/4000");
  console.log("====================================");
}
bootstrap();

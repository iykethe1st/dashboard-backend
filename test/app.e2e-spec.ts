import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from "@nestjs/common";
import helmet from "helmet";
import * as compression from "compression";
import * as pactum from "pactum";
import { PrismaService } from "../src/prisma/prisma.service";
import { AuthDto } from "../src/auth/dto";
import { EditUserDto } from "src/user/dto";

describe("App e2e", () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.enableCors({ origin: "*" });
    app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
    app.enableVersioning({ type: VersioningType.URI });
    app.use(helmet());
    app.use(compression());
    await app.init();
    await app.listen(4400);
    prisma = app.get(PrismaService);
    await prisma.cleanDB();
    pactum.request.setBaseUrl("http://localhost:4400");
  });
  afterAll(() => {
    app.close();
  });

  describe("Auth", () => {
    const dto: AuthDto = {
      email: "ike@gmail.com",
      password: "123",
    };
    describe("Signup", () => {
      it("Should throw an error if email is empty", () => {
        return pactum
          .spec()
          .post("/auth/signup")
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it("Should throw an error if password is empty", () => {
        return pactum
          .spec()
          .post("/auth/signup")
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it("Should throw an error if email and password is empty", () => {
        return pactum
          .spec()
          .post("/auth/signup")
          .withBody({})
          .expectStatus(400);
      });

      it("Should sign up", () => {
        return pactum
          .spec()
          .post("/auth/signup")
          .withBody(dto)
          .expectStatus(201);
      });
    });

    describe("Login", () => {
      it("Should throw an error if email is empty", () => {
        return pactum
          .spec()
          .post("/auth/login")
          .withBody({
            password: dto.password,
          })
          .expectStatus(400);
      });

      it("Should throw an error if password is empty", () => {
        return pactum
          .spec()
          .post("/auth/login")
          .withBody({
            email: dto.email,
          })
          .expectStatus(400);
      });

      it("Should throw an error if email and password is empty", () => {
        return pactum.spec().post("/auth/login").withBody({}).expectStatus(400);
      });

      it("Should log in", () => {
        return pactum
          .spec()
          .post("/auth/login")
          .withBody(dto)
          .expectStatus(200)
          .stores("userAt", "access_token");
      });
    });
  });

  describe("User", () => {
    const dto: EditUserDto = {
      firstName: "Ikenna",
      email: "iyke@gmail.com",
    };
    describe("Get me", () => {
      it("Should get current user", () => {
        return pactum
          .spec()
          .get("/users/me")
          .withHeaders({
            Authorization: `Bearer $S{userAt}`,
          })
          .expectStatus(200);
      });
    });
    describe("Edit user", () => {
      it("should edit user", () => {
        const dto: EditUserDto = {
          firstName: "Ikenna",
          email: "iyke@gmail.com",
        };
        return pactum
          .spec()
          .patch("/users")
          .withHeaders({
            Authorization: `Bearer $S{userAt}`,
          })
          .withBody(dto)
          .expectStatus(200);
        // .expectBodyContains("false value");
        // .expectBodyContains(dto.email);
        // .inspect()
      });
    });
  });

  describe("Order", () => {
    describe("Create order", () => {
      it.todo("Should create order");
    });
    describe("Get orders", () => {
      it.todo("Should get orders");
    });

    describe("Get order by id", () => {
      it.todo("Should get orders");
    });
    describe("Edit order by id", () => {
      it.todo("Should edit order");
    });
    describe("Delete order by id", () => {
      it.todo("Should delete order");
    });
  });
  it.todo("should pass");
});

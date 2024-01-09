import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./user/dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";

@Injectable({})
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService
  ) {}
  async signup(dto: AuthDto) {
    try {
      // generate password hash
      const hash = await argon.hash(dto.password);

      // save the new user
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // return the saved user
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async login(dto: AuthDto) {
    // find the user by email
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if the user does not exist, throw new exception
    if (!user) throw new ForbiddenException("Credentials incorrect");

    // compare password
    const passwordMatches = await argon.verify(user.hash, dto.password);

    // if password incorrect throw new exception
    if (!passwordMatches) throw new ForbiddenException("Incorrect password");

    // return user
    return this.signToken(user.id, user.email);
  }

  async courierSignup(dto: AuthDto) {
    try {
      // generate password hash
      const hash = await argon.hash(dto.password);

      // save the new user
      const courier = await this.prisma.courier.create({
        data: {
          email: dto.email,
          hash,
        },
      });

      // return the saved courier
      return this.signToken(courier.id, courier.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          throw new ForbiddenException("Credentials taken");
        }
      }
      throw error;
    }
  }

  async courierLogin(dto: AuthDto) {
    // find the user by email
    const courier = await this.prisma.courier.findUnique({
      where: {
        email: dto.email,
      },
    });

    // if the courier does not exist, throw new exception
    if (!courier) throw new ForbiddenException("Credentials incorrect");

    // compare password
    const passwordMatches = await argon.verify(courier.hash, dto.password);

    // if password incorrect throw new exception
    if (!passwordMatches) throw new ForbiddenException("Incorrect password");

    // return courier
    return this.signToken(courier.id, courier.email);
  }

  async signToken(
    userId: number,
    email: String
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };

    const jwtSecret = this.config.get("JWT_SECRET");
    const token = await this.jwt.signAsync(payload, {
      // expiresIn: "15m",
      secret: jwtSecret,
    });
    return {
      access_token: token,
    };
  }
}

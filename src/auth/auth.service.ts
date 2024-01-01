import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
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
      delete user.hash;
      return user;
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
    delete user.hash;
    return user;
  }
}

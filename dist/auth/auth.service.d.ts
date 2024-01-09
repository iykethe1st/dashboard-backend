import { PrismaService } from "src/prisma/prisma.service";
import { AuthUserDto } from "./user/dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    login(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    courierSignup(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    courierLogin(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: String): Promise<{
        access_token: string;
    }>;
}

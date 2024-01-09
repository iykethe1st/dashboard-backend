import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./user/dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
export declare class AuthService {
    private prisma;
    private jwt;
    private config;
    constructor(prisma: PrismaService, jwt: JwtService, config: ConfigService);
    signup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    courierSignup(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    courierLogin(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    signToken(userId: number, email: String): Promise<{
        access_token: string;
    }>;
}

import { AuthService } from "./auth.service";
import { AuthUserDto } from "./user/dto";
import { AuthCourierDto } from "./courier/dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    login(dto: AuthUserDto): Promise<{
        access_token: string;
    }>;
    courierSignup(dto: AuthCourierDto): Promise<{
        access_token: string;
    }>;
    courierLogin(dto: AuthCourierDto): Promise<{
        access_token: string;
    }>;
}

import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
}

import { AuthGuard } from "@nestjs/passport";

export class JwtUserGuard extends AuthGuard("userJwt") {
  constructor() {
    super();
  }
}

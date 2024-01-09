import { AuthGuard } from "@nestjs/passport";

export class JwtCourierGuard extends AuthGuard("courierJwt") {
  constructor() {
    super();
  }
}

import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetOrder = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getResponse();
    console.log({ request });
    if (data) return request.order[data];
    return request.order;
  }
);

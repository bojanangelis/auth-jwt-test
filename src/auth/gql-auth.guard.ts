import {
  ExecutionContext,
  Injectable,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

export class GqlAuthGuard extends AuthGuard('local') {
  constructor() {
    super();
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs().loginUserInput;
    return request;
  }
}

// export const CurrentUser = createParamDecorator(
//   (data: unknown, context: ExecutionContext) => {
//     const ctx = GqlExecutionContext.create(context);
//     return ctx.getContext().req.user;
//   },
// );

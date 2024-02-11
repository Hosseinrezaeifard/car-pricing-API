import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  (data: never, context: ExecutionContext) => {
    // context is a wrapper around the incoming request (GRPC, Web Socket, Http, Graphql, etc...)
    // data is whatever that is provided as argument to our decorator
    // never means this data is not gonna be used, whatsoever, because current user decorator doesn't need any args
    const request = context.switchToHttp().getRequest();
    return request.currentUser;
  },
);

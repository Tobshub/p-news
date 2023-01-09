import * as trpcExpress from "@trpc/server/adapters/express";
import UserController from "./userController";

const userRouter = trpcExpress.createExpressMiddleware({
  router: UserController,
});

export default userRouter;

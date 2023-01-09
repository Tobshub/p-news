import z from "zod";
import { tRouter, tProcedure } from "config/trpc";
import UserModel from "./userSchema";
import { HydratedDocument } from "mongoose";
import genId from "utils/genId";
/* new UserModel() returns type mongoose.HydratedDocument<User> */

const UserController = tRouter({
  // create user
  "new-user": tProcedure
    .input(
      z.object({
        email: z.string().email({ message: "Invalid Email address" }),
        name: z.string().min(3).max(25),
        password: z.string().min(8).max(64),
      })
    )
    .query(async ({ input }: { input: UserSignUp }) => {
      try {
        const userData: User = {
          ...input,
          articles: [],
          createdAt: Date.now(),
          id: genId(),
          savedArticles: [],
          notifications: [],
        };
        const user: HydratedDocument<User> = new UserModel(userData);

        const res = user.save().then((doc: User) => {
          if (!doc) {
            throw new Error("failed to add new user");
          }
          return {
            success: true,
            message: "user added",
            data: doc,
          };
        });

        return res;
      } catch (error) {
        return {
          success: false,
          message: error,
          data: undefined,
        };
      }
    }),
  // get user
  // update user
  // delete user
});

export default UserController;
